import './Pixel.css'

export default function Pixel () {

    function changeColor() {
        console.log("Ny färg")
    }

    return (
        <div className='pixel' onClick={ changeColor }></div>
    )
}