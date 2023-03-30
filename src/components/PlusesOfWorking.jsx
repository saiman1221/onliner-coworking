import React from 'react';
import '../styles/PlusesOfWorking.scss';
import {PlusesOfWorkingCard} from "./PlusesOfWorkingCard";

export const PlusesOfWorking = () => {
    const data = [
        'Успешная бизнес-модель, проверенная временем',
        'Помощь в открытии вашего коворкинга с нуля',
        'Персонализированный бизнес-план',
        'Маркетинговое и рекламное продвижение',
        'Помощь в привлечении клиентов на новую площадку',
        'Обучение сотрудников'
    ]

    return (
        <div className={'PlusesOfWorking container'}>
            <h2 className={'title'}>Ваши плюсы от работы с нами</h2>
            <p className={'text'}>Успешно выстроенные бизнес-процессы создают положительную репутацию.
                <br/>И мы хотим поделиться ею с вами!</p>
            <div className={'cards'}>
                {data.map((cardItem, id) => <PlusesOfWorkingCard cardText={cardItem} counter={++id}/>)}
            </div>

        </div>
    );
}