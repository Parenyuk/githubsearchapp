import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {GithubResponseDataType, ResponseDataType} from '../../services/types';
import {Card} from '../Card/Card';


export const CardList = () => {

    const repositoriesDataArray = useSelector<AppStateType, GithubResponseDataType>(state =>
        state.searchRepositoriesPage.repositoriesDataArray)

    const repositoriesArray = repositoriesDataArray?.map((item: ResponseDataType ) => {
            return (
                <Card key={item.id} name={item.name} language={item.language} description={item.description}/>
                )
        }
    )

    return (
        <div className={'cardList'}>
            {repositoriesArray}
        </div>
    )
}
