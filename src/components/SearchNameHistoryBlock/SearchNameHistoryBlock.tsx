import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import './SearchNameHistoryBlock.scss';
// import _slice from 'lodash-slice'
 import _slice from 'lodash.slice'

export const SearchNameHistoryBlock = () => {

    const arraySearchValue = useSelector<AppStateType, Array<string>>(state => state.searchRepositoriesPage.arraySearchValue)

    const searchHistory = arraySearchValue
     //   ?.slice(arraySearchValue.length - 5)
        .map((name: string, id) => {
            return <div key={id}>{name}</div>
        })


    // const searchHistory =
    //    _slice(arraySearchValue, arraySearchValue.length - 5, arraySearchValue.length)
    //     .map((name: string, id) => {
    //         return <div key={id}>{name}</div>
    //     })

    return (
        <>
            <div className={'searchHistoryTitle'}>Search history:</div>
            <div className={'arraySearchValue'}>
                {searchHistory}
            </div>
        </>
    )
}
