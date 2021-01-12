import React from 'react';
import s from './main.module.scss'
import {SearchInput} from '../SearchInput/SearchInput';
import {SearchNameHistoryBlock} from '../SearchNameHistoryBlock/SearchNameHistoryBlock';
import {CardList} from '../CardList/CardList';

type PropsType = {
    searchValue: string;
    setSearchValue: (el: string) => void
}

export const Main: React.FC<PropsType> = ({searchValue, setSearchValue}) => {
    return (
        <section className={s.content}>
            <div>
                <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}
                />
                <SearchNameHistoryBlock/>
            </div>
            <CardList/>
        </section>
    );
}
