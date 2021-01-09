import React from 'react';
import logo from './../../assets/images/logo.png'
import './Header.scss'

export const Header = () => {
    return (
        <div className='header section-line'>
            <img src={logo} alt={'#'} width={150} height={50} />
            <p className={'rightTitle'}>
                Github users search app
            </p>
        </div>
    )
}
