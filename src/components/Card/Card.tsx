import React from 'react';
import './../CardList/CardList.scss'

type PropsType = {
    key: number
    name: string
    language: string
    description: null | string
}

export const Card: React.FC<PropsType> = ({key, name, language, description}) => {
    return (
        <div key={key} className='card' >
            <div className='title'>{name}</div>
            <div>Language: {language}</div>
            <div>Description: {description}</div>
        </div>
    )
}
