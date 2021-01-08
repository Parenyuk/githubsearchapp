import React, {ChangeEvent} from 'react';
import './SearchInput.scss';

type PropsType = {
    searchValue: string
    setSearchValue: (s: string) => void
    dispatchThunk: () => void
}

export const SearchInput: React.FC<PropsType> = ({searchValue, setSearchValue, dispatchThunk}) => {

    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                dispatchThunk()
            }
    }

    return (
        <div >
        <input value={searchValue}  onChange={changeSearchValue} className={'searchInput'}  onKeyPress={onKeyPress}  />
        </div>
    )
}
