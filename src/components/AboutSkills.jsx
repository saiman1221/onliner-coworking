import React from 'react';
import '../styles/AboutSkills.scss';
import leftImg from '../assets/about_skills/leftImg.png';
import rightImg from '../assets/about_skills/rightImg.png'

export const AboutSkills = () => {
    return (
        <div className={'AboutSkills container'}>
            <div className="left-part">
                <h2 className={'title'}>опыт не требуется</h2>
                <p className={'text'}>Отличное решение входа в салонный бизнес для начинающих. Вы получите подробные инструкции и обучение, а также постоянные консультации от отдела развития партнеров. Уже через 3-4 месяца коворкинг сможет работать без вас.</p>
                <img
                    src={leftImg}
                    alt="Фото рабочего места"
                    className={'left-img'}
                />
            </div>
            <div className="right-part">
                <img
                    src={rightImg}
                    alt="Фото кабинета"
                    className={'right-img'}
                />
            </div>
        </div>
    );
}