import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import DrawingPanel from './DrawingPanel';
import './Editor.css'


function Editor(props) {
    const {sizeOfPanel} = props
    const [pixelColor, setPixelColor] = useState("#9900EF"); // State som håller den valda färgen
    
   

    function selectPixelColor(color) {
        console.log(color); // color innehåller den färgen som användaren valde i color picker
        setPixelColor(color.hex); // Sparar färgen i vårt state
    }

    return (
        <div className='editor'>
            <TwitterPicker color={ pixelColor } onChangeComplete={ selectPixelColor } />
            <DrawingPanel sizeOfPanel = {sizeOfPanel} />
        </div>
    )
}

export default Editor;