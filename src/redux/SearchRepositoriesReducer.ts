import {AppStateType, InferActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {githubApi} from '../api/api';
import {GithubResponseDataType} from '../services/types';

const SET_SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES_REDUCER/SET_SEARCH_REPOSITORIES';
const SET_HISTORY_SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES_REDUCER/SET_HISTORY_SEARCH_REPOSITORIES';
const SET_ERROR = 'SEARCH_REPOSITORIES_REDUCER/SET_ERROR'

let initialState = {
    repositoriesDataArray: [] as GithubResponseDataType,
    arraySearchValue: [] as Array<string>,
    setError: null as null | string
}

type InitialStateType = typeof initialState;

export const searchRepositoriesReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_SEARCH_REPOSITORIES:
            return {...state, repositoriesDataArray: action.repositoriesDataArray}
        case SET_HISTORY_SEARCH_REPOSITORIES: {
            return {
                ...state, arraySearchValue: [...state.arraySearchValue.slice(-4), action.searchValue + ' ']
            }
            // return {
            //     ...state, arraySearchValue: [...state.arraySearchValue, action.searchValue + ' ']
            // }
        }
        case SET_ERROR: {
            return {...state, setError: action.errorMessage}
        }
        default:
            return state
    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

export const actions = {
    searchRepositoriesAC: (repositoriesDataArray: GithubResponseDataType) => {
        return ({type: SET_SEARCH_REPOSITORIES, repositoriesDataArray} as const)
    },
    searchRepositoriesHistoryAC: (searchValue: string) => {
        return ({type: SET_HISTORY_SEARCH_REPOSITORIES, searchValue} as const)
    },
    setError: (errorMessage: string | null) => {
        return ({type: SET_ERROR, errorMessage} as const)
    }
}

export const searchRepositoriesTC = (searchValue: string): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    dispatch(actions.searchRepositoriesHistoryAC(searchValue))
    try {
        if (searchValue) {
            const response = await githubApi.setSearchRepositories(searchValue);
            dispatch(actions.searchRepositoriesAC(response.data))
            dispatch(actions.setError(null))
        }
        else {
            dispatch(actions.setError(null))
        }
    } catch (e) {
        let statusCode = e.response?.status

        if (statusCode === 403) {
            dispatch(actions.setError('error'))
        } else if ((statusCode === 401) || (statusCode === 404)) {
            dispatch(actions.setError('Sorry, no matches.'))
        } else {
            dispatch(actions.setError('some error'))
        }
    }
}



