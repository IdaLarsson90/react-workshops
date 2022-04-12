import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar () {
    return (
        <nav>
            <Link className='nav-item' to='/'>Hem</Link>
            <Link className='nav-item' to='/om'>Om</Link>
            <Link className='nav-item' to='/produkter'>Produkter</Link>
        </nav>
    )
}