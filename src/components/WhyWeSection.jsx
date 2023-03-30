import React from 'react';
import '../styles/WhyWeSection.scss';
import image from '../assets/why_we_section/photo.png';
import uiEl from '../assets/why_we_section/ui-element.svg'

import {WhyWeSectionItem} from "./WhyWeSectionItem";

const itemsListInfo = [
    '3 коворкинга, 26 рабочих мест с лучшими условиями',
    'Приятная атмосфера, которую создает окружение профессионалов',
    '4 вида зон для работы мастеров разных направлений'
]

const renderItemsList = () => {
    return itemsListInfo.map((el, id) => <WhyWeSectionItem
        itemContent={el}
        imageUrl={id + 1}
        key={Date.now() + id * el.length}
    />)
}

export const WhyWeSection = () => {
    return (
        <div className={'WhyWeSection'}>
            <div className="content container">
                <div className={'content-left'}>
                    <img src={image} alt=""/>
                </div>
                <div className={'content-right'}>
                    <h2 className={'title'}>Почему мы?</h2>
                    <p className={'text'}>Главное преимущество франшизы — партнером может стать абсолютно любой человек,
                        даже не имеющий опыта работы в бьюти индустрии.</p>
                    <div className={'items-list'}>
                        {renderItemsList()}
                    </div>
                </div>
            </div>
            <img src={uiEl} alt="UI-элемент" className={'ui-element'}/>
        </div>
    );
};

