import React from 'react';
import '../styles/ComparisonSectionCard.scss';
import cross from '../assets/comparison_section/cross.svg';
import mark from '../assets/comparison_section/mark.svg';

export const ComparisonSectionCard = ({props}) => {
    const images = {
        cross,
        mark
    }

    return (
        <div className="ComparisonSectionCard">
            <div className={'title-content'}>
                <h3 className={'title'}>{props.title}</h3>
                <img src={images[props.img]} alt="Иконка"/>
            </div>
            <ul className={'list'}>
                <li className={'list-item'}><span>{props.list[0]}</span> - аренда</li>
                <li className={'list-item'}><span>{props.list[1]}</span> - з/п персоналу</li>
                <li className={'list-item'}><span>{props.list[2]}</span> - другие расходы</li>
            </ul>
            <div className={'result'}>
                <span
                    className={'result_content'}
                    style={{backgroundColor: props.result['bg-color'], color: props.result['color']}}
                >{props.result.text}</span>
            </div>
        </div>
    );
}