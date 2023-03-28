import React from 'react';
import './Header.scss';
import logo from'../../assets/header/logo.svg'

export const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'Header-content container'}>
                <img src={logo} alt="Логотип"/>
                <div className={'Header-content-links'}>
                    <a href="#about_us">О нас</a>
                    <a href="#benefits">Плюсы</a>
                    <a href="#calculation">Расчет</a>
                    <a href="#steps">Этапы запуска</a>
                    <a href="#contacts">Контакты</a>
                </div>
            </div>
        </div>
    );
}