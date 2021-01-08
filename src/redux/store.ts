import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {searchRepositoriesReducer} from './SearchRepositoriesReducer';



export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;


const rootReducer = combineReducers(
    {
        searchRepositoriesPage: searchRepositoriesReducer,
    }
)
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
