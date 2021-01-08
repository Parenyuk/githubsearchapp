import React, {useState} from 'react';
import logo from './assets/images/logo.png'
import './App.scss';
import {SearchInput} from './components/SearchInput/SearchInput';
import {useDispatch} from 'react-redux';
import {searchRepositoriesHistoryTC, searchRepositoriesTC} from './redux/SearchRepositoriesReducer';
import {CardList} from './components/CardList/CardList';
import {SearchNameHistoryBlock} from './components/SearchNameHistoryBlock/SearchNameHistoryBlock';

export const App = () => {

    const [searchValue, setSearchValue] = useState<string>('')


    const dispatch = useDispatch();

    const dispatchThunk = () => {
        dispatch(searchRepositoriesTC(searchValue))
        dispatch(searchRepositoriesHistoryTC(searchValue))
    }

    return (
        <div className="app">
            <div className='container'>
                <img src={logo} alt={'#'} width={150} height={50}/>
                <div className={'rightTitle'}>
                    Github users search app
                </div>
            </div>
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} dispatchThunk={dispatchThunk}/>
            <div>
                <SearchNameHistoryBlock/>
            </div>
            <CardList/>
        </div>
    );
}

export default App;
