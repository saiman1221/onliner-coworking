import React from 'react';
import '../styles/WhatIsItCard.scss';

export const WhatIsItCard = ({cardTitle, cardText}) => {
    return (
        <div className="WhatIsItCard">
            <div className={'title'}>
                <h3>{cardTitle}</h3>
            </div>
            <p className={'text'}>{cardText}</p>
        </div>
    );
}