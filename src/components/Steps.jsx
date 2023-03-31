import React from 'react';
import '../styles/Steps.scss';
import image1 from '../assets/steps/image1.svg';
import image2 from '../assets/steps/image2.svg';
import uiEl from '../assets/steps/ui-element.svg';

export const Steps = () => {
    return (
        <div className={'Steps'}>
            <div className="container">
                <h2 className={'title'}>Этапы запуска франшизы</h2>
            </div>
            <div className={'images'}>
                <img src={image1} alt="Фото"/>
                <img src={image2} alt="Фото"/>
            </div>
            <img
                src={uiEl}
                alt=""
                className={'ui-element'}
            />
        </div>
    );
}