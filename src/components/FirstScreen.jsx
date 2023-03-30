import React from 'react';
import '../styles/FirstScreen.scss';
import background_image from '../assets/first_screen/background_image.png';

export const FirstScreen = () => {
    return (
        <div className={'FirstScreen'}>
            <img
                className={'background_image'}
                src={background_image}
                alt="Фоновое изображение"
            />
            <div className={'title'}>
                <div className={'content container'}>
                    <h1>Открой свой собственный бизнес за 30 дней </h1>
                    <div className={'ui-border'}></div>
                </div>
            </div>
        </div>
    );
}