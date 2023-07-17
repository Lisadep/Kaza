import { Link } from 'react-router-dom'
import '../../styles/sass/layout/_header.scss'
import logo from '../../assets/logo.svg'


function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='Kaza' className='header__logo' />
            <nav className='header__list'>
            <Link to="/">Accueil</Link>
            <Link to="/survey">A propos</Link>
            </nav>
        </div>
    )
}

export default Header