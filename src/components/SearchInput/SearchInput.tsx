import React, {ChangeEvent, useEffect} from 'react';
import s from './searchInput.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import _debounce from 'lodash.debounce';
import {searchRepositoriesTC} from '../../redux/SearchRepositoriesReducer';

type PropsType = {
    searchValue: string
    setSearchValue: (s: string) => void
}

export const SearchInput: React.FC<PropsType> = ({searchValue, setSearchValue}) => {

    const error = useSelector<AppStateType, null | string>(state => state.searchRepositoriesPage?.setError)

    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const dispatch = useDispatch();

    const dispatchThunk = () => {
        dispatch(searchRepositoriesTC(searchValue))

    }

    const delayedQuery = _debounce(dispatchThunk, 1500);

    useEffect(() => {
        if (searchValue) {
            delayedQuery();
        }
        return delayedQuery.cancel;
    }, [searchValue, delayedQuery]);

    return (
        <>
            <input value={searchValue} onChange={changeSearchValue} className={s.searchInput} type={'text'}/>
            {error ? <div className={s.error}>{error}</div> : ' '}
        </>
    )
}
