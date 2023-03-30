import React from 'react';
import '../styles/WhyWeSectionItem.scss';

export const WhyWeSectionItem = (props) => {
    return (
        <div className={'WhyWeSectionItem'}>
            <img src={require(`../assets/why_we_section/icon${props.imageUrl}.svg`)} alt="Иконка"/>
            <p>{props.itemContent}</p>
        </div>
    );
}