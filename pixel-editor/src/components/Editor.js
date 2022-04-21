import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import DrawingPanel from './DrawingPanel'
import './Editor.css'


function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [config, setConfig] = useState(true);
    const [pixelColor, setPixelColor] = useState('#000');


    function selectPixelColor(color) {
        console.log(color.hex)
        setPixelColor(color.hex);
        
    }
    function initializeDrawing (event) {
        event.preventDefault();
        setConfig(!config);
    }
   
    return (
        <section className='editor'>
            <h1>Pixel editor</h1>
            {config && <h2>Ange dimensioner</h2>}
            {config && 
            <form >
                <input name='rows' type="text" defaultValue={panelWidth} onKeyUp={ (event) =>{setPanelWidth(parseInt(event.target.value))}} /> 
                <input name='columns' type="text" defaultValue={panelHeight} onKeyUp={ (event) =>{setPanelHeight(parseInt(event.target.value))}} /> 
                <button onClick={initializeDrawing} className ='addBtn'> Börja rita </button>
            </form> }
            {!config && <TwitterPicker onChangeComplete={selectPixelColor}/>}
            { !config && <DrawingPanel width= {panelWidth} height={panelHeight} color={pixelColor} />}
        </section>
    )
}

export default Editor;