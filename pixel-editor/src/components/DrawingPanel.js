import './DrawingPanel.css'
import Row from './Row'
import { useState } from 'react';


export default function DrawingPanel (props) {

    const { sizeOfPanel} = props;
    console.log(sizeOfPanel);
    
    function createRows () {
        for (let index = 0; index < 5; index++) {
            return (
                <Row />
            )
        }
    }
    

    return (
        <div className="drawingPanel">
            { createRows }
        </div>
    )
}