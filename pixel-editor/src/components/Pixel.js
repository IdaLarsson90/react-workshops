import './Pixel.css'
import { useState } from 'react';

export default function Pixel (props) {
    const {color} = props

    const [pixelColor, setPixelColor] = useState('');
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function setColor() {
        setPixelColor(color);
        setCanChangeColor(false);
    }

    function onMouseOver() {
        setOldColor(pixelColor)
        setPixelColor(color)
    }
    function onMouseLeave () {
        if (canChangeColor) {
            setPixelColor(oldColor)
        }
        setCanChangeColor(true);
    }


    return (
        <article className='pixel' 
        onClick={setColor}
        onMouseOver = {onMouseOver}
        onMouseLeave = {onMouseLeave}
        style={{ backgroundColor: pixelColor}}>
        </article>
    )
}