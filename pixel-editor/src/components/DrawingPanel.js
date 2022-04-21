import './DrawingPanel.css'
import Row from './Row'

export default function DrawingPanel (props) {

    const { width, height, color} = props;
   

    const pixelRows = [...Array(height).keys()];
    const pixelItems = pixelRows.map ((pixelRow) =>{
        return <Row  width={width} key={pixelRow} color={color}/>
    })
    
    return (
        <section className="drawingPanel">
            {pixelItems}
            
        </section>
    )
}