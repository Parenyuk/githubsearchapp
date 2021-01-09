import React, {ChangeEvent, useCallback, useEffect} from 'react';
import './SearchInput.scss';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import debounce from "lodash.debounce";

type PropsType = {
    searchValue: string
    setSearchValue: (s: string) => void
    dispatchThunk: () => void
}

export const SearchInput: React.FC<PropsType> = ({searchValue, setSearchValue, dispatchThunk}) => {



    const error = useSelector<AppStateType, null | string>(state => state.searchRepositoriesPage?.setError)

    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const delayedQuery = useCallback(debounce(dispatchThunk, 1500), [searchValue]);

    useEffect(() => {
        delayedQuery();
        return delayedQuery.cancel;
    }, [searchValue, delayedQuery]);

    return (
        <div>
            <input value={searchValue} onChange={changeSearchValue} className={'searchInput'}  />
            {error && <div className={'error'}>{error}</div>}
        </div>
    )
}
