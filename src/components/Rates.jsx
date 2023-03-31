import React from 'react';
import '../styles/Rates.scss';
import icon from '../assets/rates/save-icon.svg';

export const Rates = () => {
    return (
        <div className={'Rates'}>
            <div className="container">
                <h2 className={'title'}>Тарифы на открытие бьюти-коворкинга</h2>
                <a href="#" className={'link'}>Актуальные цены  и тарифы на открытие бьюти-коворкинга можно скачать тут<img src={icon} alt=""/></a>
            </div>
        </div>
    );
}