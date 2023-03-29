import React from 'react';
import './WhyWeSection.scss';
import image from '../../assets/why_we_section/photo.png';

const itemsListInfo = [
    '3 коворкинга, 26 рабочих мест с лучшими условиями',
    'Приятная атмосфера, которую создает окружение профессионалов',
    '4 вида зон для работы мастеров разных направлений'
]

const ItemOfList = (props) => {
    return(
        <div className={'item'}>
            dwad
        </div>
    )
}

const renderItemsList = () => {
    return itemsListInfo.map((el, id) => <ItemOfList itemContent={el} imageUrl={`../../assets/why_we_section/image${id}`}/>)
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
                    <p className={'text'}>Главное преимущество франшизы — партнером может стать абсолютно любой человек, даже не имеющий опыта работы в бьюти индустрии.</p>
                    <div className={'items-list'}>
                        {renderItemsList()}
                    </div>
                </div>
            </div>
        </div>
    );
};

