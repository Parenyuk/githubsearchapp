import {AppStateType, InferActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {githubApi} from '../api/api';
import {GithubResponseDataType} from '../services/types';

const SET_SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES_REDUCER/SET_SEARCH_REPOSITORIES';
const SET_HISTORY_SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES_REDUCER/SET_HISTORY_SEARCH_REPOSITORIES';

let initialState = {
    repositoriesDataArray: [] as GithubResponseDataType,
    arraySearchValue: [] as Array<string>
}

type InitialStateType = typeof initialState;

export const searchRepositoriesReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_SEARCH_REPOSITORIES:
            return {...state, repositoriesDataArray: action.repositoriesDataArray }
        case SET_HISTORY_SEARCH_REPOSITORIES: {
            return  {...state,  arraySearchValue: [...state.arraySearchValue, action.searchValue + ' ' ] }
        }
        default:
            return state
    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

export const actions = {
    searchRepositoriesAC: (repositoriesDataArray: GithubResponseDataType ) => {
        debugger
        return ({type: SET_SEARCH_REPOSITORIES, repositoriesDataArray} as const)
    },
    searchRepositoriesHistoryAC: (searchValue: string) => {
        return  ({type: SET_HISTORY_SEARCH_REPOSITORIES, searchValue} as const)
    }
}

export const searchRepositoriesTC = (searchValue: string): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        const response = await githubApi.setSearchRepositories(searchValue);
        debugger
        console.log(response.data)
        dispatch(actions.searchRepositoriesAC(response.data))
    } catch (e) {
        throw new Error(e)
    }
}

export const searchRepositoriesHistoryTC = (searchValue: string): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        dispatch(actions.searchRepositoriesHistoryAC(searchValue))
    } catch (e) {
        throw new Error(e)
    }
}

