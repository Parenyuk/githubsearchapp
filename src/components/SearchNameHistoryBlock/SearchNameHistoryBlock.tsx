import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import './SearchNameHistoryBlock.scss'

export const SearchNameHistoryBlock = () => {

    const arraySearchValue = useSelector<AppStateType, Array<string>>(state => state.searchRepositoriesPage.arraySearchValue)

    const searchHistory = arraySearchValue
        ?.slice(-5)
        .map((name: string) => {
      return  <div>{name}</div>
    } )

    return (
        <>

            <div className={'searchHistoryTitle'}>Search history:</div>
            <div className={'arraySearchValue'}>
                {searchHistory}
            </div>
        </>
    )
}
