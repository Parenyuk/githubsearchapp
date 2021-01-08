import React from 'react';
import './../CardList/CardList.scss'

type PropsType = {
    id: number
    name: string
    language: string
    description: null | string
}

export const Card: React.FC<PropsType> = ({id, name, language, description}) => {
    return (
        <div key={id} className='card' >
            <div className='title'>{name}</div>
            <div>Language: {language}</div>
            <div>Description: {description}</div>
        </div>
    )
}
