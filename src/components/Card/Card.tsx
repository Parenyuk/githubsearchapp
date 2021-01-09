import React from 'react';
import './../CardList/CardList.scss'

type PropsType = {
    name: string
    language: string
    description: null | string
}

export const Card: React.FC<PropsType> = ({name, language, description}) => {
    return (
        <div   className='card'>
            <div className='title'>{name}</div>
            <div>Language: {language}</div>
            <div>Description: {description}</div>
        </div>
    )
}
