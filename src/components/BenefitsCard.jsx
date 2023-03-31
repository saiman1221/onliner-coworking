import React from 'react';
import '../styles/BenefitsCard.scss'

export const BenefitsCard = ({cardInfo, cardId}) => {
    return (
        <div className="BenefitsCard">
            <img
                src={require(`../assets/benefits/image${cardId}.svg`)}
                alt=""
                className={'image'}
            />
            <h3 className={'title'}>{cardInfo.title}</h3>
            <p className={'text'}>{cardInfo.text}</p>
        </div>
    );
}