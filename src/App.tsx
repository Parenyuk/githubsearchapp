import React, {useState} from 'react';
import './app.scss';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';

const App = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <div className='app'>
            <Header/>
            <Main searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
}

export default App;
