import Pixel from './Pixel'
import './Row.css'

export default function Row () {
    //funktion som loopar ut X antal pixlar utifrån angett värde
    return (
        <div className='row'>
            <Pixel />
            <Pixel />
            <Pixel />
            <Pixel />
            <Pixel />
        </div>
    )
}