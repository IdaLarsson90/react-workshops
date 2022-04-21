
import { useState } from 'react';
import './Top.css';

export default function Top(props) {
    const {heading, subHeading} = props;
    
    return (
        <article className='top'>
            <h1>{ heading }</h1>
            <h4>{ subHeading }</h4>
        </article>
    )
}