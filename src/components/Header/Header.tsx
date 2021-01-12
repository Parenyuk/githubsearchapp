import React from 'react';
import logo from './../../assets/images/logo.png'
import s from './header.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.bottomLine}>
                <a className={s.linkLogo} href={'/'}>
                    <img src={logo} alt={'logo'} className={s.logo} />
                </a>
                <span className={s.title}>
                Github users search app
                </span>
            </div>
        </header>
    )
}
