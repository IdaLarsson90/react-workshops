import Pixel from './Pixel'
import './Row.css'

export default function Row (props) {
    const {width, color} = props;

    const pixels = [...Array(width).keys()];

    const pixelItems = pixels.map((pixel) => {
       return <Pixel key={pixel} color={color}/>
    });
    
    return (
        <section className='row'>
            {pixelItems}
        </section>
    )
}