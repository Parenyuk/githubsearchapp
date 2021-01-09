import React, {useState} from 'react';
import './App.scss';
import {SearchInput} from './components/SearchInput/SearchInput';
import {useDispatch} from 'react-redux';
import {searchRepositoriesHistoryTC, searchRepositoriesTC} from './redux/SearchRepositoriesReducer';
import {CardList} from './components/CardList/CardList';
import {SearchNameHistoryBlock} from './components/SearchNameHistoryBlock/SearchNameHistoryBlock';
import {Header} from './components/Header/Header';

export const App = () => {

    const [searchValue, setSearchValue] = useState<string>('')

    const dispatch = useDispatch();

    const dispatchThunk = () => {
        dispatch(searchRepositoriesTC(searchValue))
        dispatch(searchRepositoriesHistoryTC(searchValue))
    }

    return (
        <div className='app'>
            <div className='container'>
                <Header/>
                <div className='mainSection'>
                    <div>
                        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}
                                     dispatchThunk={dispatchThunk}/>
                        <SearchNameHistoryBlock/>
                    </div>
                    <CardList/>
                </div>
            </div>
        </div>
    );
}

export default App;
