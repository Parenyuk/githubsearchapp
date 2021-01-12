import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import './searchNameHistoryBlock.scss';

export const SearchNameHistoryBlock = () => {

    const arraySearchValue = useSelector<AppStateType, Array<string>>(state => state.searchRepositoriesPage.arraySearchValue)

    const searchHistory = arraySearchValue
        .map((name: string, id) => {
            return <div key={id}>{name}</div>
        })

    return (
        <>
            <div className={'searchHistoryTitle'}>Search history:</div>
            <div className={'arraySearchValue'}>
                {searchHistory}
            </div>
        </>
    )
}
