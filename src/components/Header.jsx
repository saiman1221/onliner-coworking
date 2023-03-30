import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/header/logo.svg'

export const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'Header-content container'}>
                <img src={logo} alt="Логотип"/>
                <div className={'Header-content-links'}>
                    <a href="src/components/Header#about_us">О нас</a>
                    <a href="src/components/Header#benefits">Плюсы</a>
                    <a href="src/components/Header#calculation">Расчет</a>
                    <a href="src/components/Header#steps">Этапы запуска</a>
                    <a href="src/components/Header#contacts">Контакты</a>
                </div>
            </div>
        </div>
    );
}