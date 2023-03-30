import React from 'react';
import '../styles/ComparisonSection.scss';
import {ComparisonSectionCard} from "./ComparisonSectionCard";

export const ComparisonSection = () => {
    const data = [
        {
            'title': 'Выручка салона красоты',
            'list': [
                '30%',
                '45%',
                '10%'
            ],
            'result': {
                'text': '15% Рентабельность',
                'bg-color': '#E9D4C6',
                'color' : '#2F2F2F'
            },
            'img' : 'cross',
        },
        {
            'title': 'Выручка бьюти-коворкинга',
            'list': [
                '30%',
                '45%',
                '10%'
            ],
            'result': {
                'text': '40% Рентабельность',
                'bg-color': '#6D766A',
                'color' : '#fff'
            },
            'img' : 'mark'
        },
    ]

    return (
        <div className={'ComparisonSection'}>
            <div className="content container">
                {data.map(cardInfo => <ComparisonSectionCard props={cardInfo}/>)}
            </div>
        </div>
    );
}