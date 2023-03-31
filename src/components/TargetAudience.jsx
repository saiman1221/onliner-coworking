import React from 'react';
import '../styles/TargetAudience.scss';
import image from '../assets/target_audience/image.png';
import uiEl from '../assets/target_audience/ui-element.svg';

export const TargetAudience = () => {
    return (
        <div className={'TargetAudience'}>
            <div className={'container'}>
                <h2 className={'title'}>Целевая аудитория</h2>
                <div className={'content'}>
                    <div className="part">
                        <ul className={'list'}><p className={'list-title'}>Кто может работать у нас:</p>
                            <li className={'list-item'}>Бровисты</li>
                            <li className={'list-item'}>Визажисты</li>
                            <li className={'list-item'}>Косметологи</li>
                            <li className={'list-item'}>Массажисты</li>
                            <li className={'list-item'}>Стилисты</li>
                            <li className={'list-item'}>Тату-мастеры</li>
                            <li className={'list-item'}>Мастера ногтевого сервиса</li>
                            <li className={'list-item'}>Мастера перманентного макияжа</li>
                            <li className={'list-item'}>Мастера по депиляции</li>
                            <li className={'list-item'}>Мастера по наращиванию ресниц</li>
                        </ul>
                        <p className={'text'}>Для каждого мастера предусмотрено рабочее место, оснащенное необходимым оборудованием и мебелью !</p>
                    </div>
                    <div className="part">
                        <img src={image} alt="Фото"/>
                    </div>
                </div>
            </div>
            <img
                src={uiEl}
                alt="UI-элемент"
                className={'ui-element'}
            />
            <div className={'ui-border'}></div>
        </div>
    );
}