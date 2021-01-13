import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loadState, saveState} from '../common/utils/localStorage';
import {searchRepositoriesReducer} from './SearchRepositoriesReducer';

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

const rootReducer = combineReducers(
    {
        searchRepositoriesPage: searchRepositoriesReducer,
    }
)
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

const persistedState = loadState();
export const store = createStore(
    rootReducer, persistedState, applyMiddleware(thunk)
);
store.subscribe(() => {
    saveState({
        searchRepositoriesPage: store.getState().searchRepositoriesPage
    });
}); // add Local Storage to project
