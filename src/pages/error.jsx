import { Link } from 'react-router-dom'
import img404 from '../assets/img-404.jpg'

function Error() {
    return (
        <div className='error'>
            <img src={img404} alt="Erreur 404" />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error