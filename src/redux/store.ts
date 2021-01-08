import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {searchRepositoriesReducer} from './SearchRepositoriesReducer';
import {loadState, saveState} from '../common/utils/LocalStorage';



export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;


const rootReducer = combineReducers(
    {
        searchRepositoriesPage: searchRepositoriesReducer,
    }
)
export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

// export const store = createStore(rootReducer, applyMiddleware(thunk));


const persistedState = loadState();
export const store = createStore(
    rootReducer, persistedState, applyMiddleware(thunk)
);
store.subscribe(() => {
    saveState({
        searchRepositoriesPage: store.getState().searchRepositoriesPage
    });
}); // add Local Storage to project
