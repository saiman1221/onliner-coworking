import React from 'react';
import '../styles/WhatIsIt.scss'
import {WhatIsItCard} from "./WhatIsItCard";
import uiEl from '../assets/what_it_is/ui-element.svg';

export const WhatIsIt = () => {
    const data = [
        {
            'title': '0 сотрудников',
            'text': 'Это сильно снижает ваши затраты на бизнес и позволяет ставить более низкие цены, привлекая больше клиентов.'
        },
        {
            'title': 'Почти пассивный доход ',
            'text': 'Максимум 30 минут в день на ведение бизнеса.'
        },
        {
            'title': 'Инвестиции',
            'text': 'Инвестиции в бьюти коворкинг значительно ниже, чем в другой любой бизнес.'
        },
        {
            'title': 'Устойчивая бизнес модель',
            'text': ' Бьюти индустрия устойчива к кризису. Даже в кризис мы работали в плюс.'
        },
        {
            'title': 'Окупаемость и прибыль',
            'text': 'Наша модель позволит с второго месяца выйти на безубыточность, за год добиться окупаемости, а рентабельность достигает 42%.'
        }
    ]

    const renderCards = (data) => {
        return data.map(cardInfo => <WhatIsItCard
            cardTitle={cardInfo.title}
            cardText={cardInfo.text}
        />);
    }

    return (
        <div className={'WhatIsIt'}>
            <div className={'container'}>
                <h2 className={'title'}>
                    Что такое «умный» бьюти коворкинг?
                </h2>
                <div className={'cards'}>
                    {renderCards(data)}
                </div>
            </div>
            <img src={uiEl} alt="" className={'ui-element'}/>
        </div>
    );
}