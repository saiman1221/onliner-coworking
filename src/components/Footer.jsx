import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/footer/logo.svg';

export const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className={'content container'}>
                <div className={'left'}>
                    <img
                        src={logo}
                        alt="Логотип"
                        className={'logo-image'}
                    />
                    <h2 className={'title'}>КОНТАКТЫ</h2>
                    <p className={'text'}>Лучшее франчайзинговое предложение!</p>
                </div>
                <div className={'right'}>
                    <ul className={'list'}>
                        <p className={'list-title'}>Телефоны white room:</p>
                        <li className={'list-item'}><a href="tel:80295408039">8029 540 80 39</a></li>
                        <li className={'list-item'}><a href="tel:80292695364">8029 269 53 64</a></li>
                    </ul>
                    <ul className={'list'}>
                        <p className={'list-title'}>Находимся:</p>
                        <li className={'list-item'}>500 м от ст.м.Кунцевщина</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}