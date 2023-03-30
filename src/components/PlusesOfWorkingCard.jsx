import React from 'react';
import '../styles/PlusesOfWorkingCard.scss'

export const PlusesOfWorkingCard = ({cardText, counter}) => {
    return (
        <div className={"PlusesOfWorkingCard"}>
            <div className={'marker'}>0{counter}</div>
            <div className={'content'}>
                <img
                    src={require(`../assets/pluses_of_working/image${counter}.png`)}
                    alt="Фото"
                    className={'image'}
                />
                <p className={'text'}>{cardText}</p>
            </div>
        </div>
    );
}