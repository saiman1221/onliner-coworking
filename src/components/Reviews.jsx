import React from 'react';
import '../styles/Reviews.scss';
import image from '../assets/reviews/image.png';

export const Reviews = () => {
    return (
        <div className={'Reviews'}>
            <div className={'container'}>
                <h2 className={'title'}>Отзывы</h2>
                <div className={'content'}>
                    <div className={'left-part'}>
                        <img
                            src={image}
                            alt="Фото пользователя"
                            className={'image'}
                        />
                    </div>
                    <div className={'right-part'}>
                        <h3 className={'part-title'}>Ирина</h3>
                        <p className={'part-text'}>“Преимущество работы здесь в том, что я могу сама регулировать свой график, сама устанавливать свою ценовую политику, работать на материалах, которые мне нравятся ...“</p>
                    </div>
                </div>
            </div>
        </div>
    );
}