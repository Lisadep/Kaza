import { Link } from 'react-router-dom'
import logoHeader from '../assets/logo-header.svg'


function Header() {
    return (
        <div className='header'>
            <img src={logoHeader} alt='Kaza' className='header__logo' />
            <nav className='header__list'>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            </nav>
        </div>
    )
}

export default Header