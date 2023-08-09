import { NavLink } from 'react-router-dom'
import logoHeader from '../assets/logo-header.svg'


function Header() {
    return (
        <div className='header'>
            <img src={logoHeader} alt='Kaza' className='header__logo' />
            <nav className='header__list'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header