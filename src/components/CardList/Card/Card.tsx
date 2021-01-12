import React from 'react';
import s from './card.module.scss'

type PropsType = {
    name: string
    language: string
    description: null | string
}

export const Card: React.FC<PropsType> = ({name, language, description}) => {
    return (
        <div className={s.card}>
            <h3 className={s.title}>{name}</h3>
            <p>Language: {language}</p>
            <p>Description: {description}</p>
        </div>
    )
}
