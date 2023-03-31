import React from 'react';
import '../styles/Calculation.scss';

export const Calculation = () => {
    return (
        <div className={'Calculation'}>
            <div className={'container'}>
                <h2 className={'title'}>Примерный расчет</h2>
                <div></div>
                <div className={'cards'}>
                    <div className={'card'}>
                        <ul>
                            <p>Максимальная выручка от аренды <strong>одного места</strong> составляет:</p>
                            <li>почасовая – 500 руб,</li>
                            <li>длительная – 420 руб.</li>
                        </ul>
                    </div>

                    <div className={'card'}>
                        <ul>
                            <p>Максимальная выручка <strong>одного коворкинга</strong> на 10 мест:</p>
                            <li>4000 руб.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}