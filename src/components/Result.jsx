import React from 'react';
import '../styles/Result.scss';
import image from '../assets/result/image.png';

export const Result = () => {
    return (
        <div className={'Result'}>
            <div className={'container'}>
                <h2 className={'title'}>ЗАРАБАТЫВАЙ до 2000 руб В МЕСЯЦ</h2>
                <div className={'content'}>
                    <div className={'left-part'}>
                        <img
                            src={image}
                            alt="Фото"
                            className={'image'}
                        />
                    </div>
                    <div className="right-part">
                        <ul className={'list'}>
                            <li className={'list-item'}>вложения от 6000</li>
                            <li className={'list-item'}>стоимость аренды 400-500 долларов</li>
                            <li className={'list-item'}>выручка от 3000 рублей</li>
                            <li className={'list-item'}>чистая прибыль до 2000 рублей</li>
                            <li className={'list-item'}>срок окупаемости 12-18 месяца</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'ui-border'}></div>
        </div>
    );
}