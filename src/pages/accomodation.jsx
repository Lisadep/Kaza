import data from '../datas/accomodations.json'
import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../components/collapse';
import Slideshow from '../components/slideshow';
import Rating from '../components/rating'

function Accomodation() {
    const {id} = useParams()
    const accomodation = data.find((accomodation) => accomodation.id === id)
    if (!accomodation) { return <Navigate to="404" /> }

    return (
        <section className='accomodation'>
            <Slideshow images = {accomodation.pictures}/>
            <div className='accomodation__header'>
                <div>
                    <h2>{accomodation.title}</h2>
                    <p>{accomodation.location}</p>
                </div>
                <div className='accomodation__host'>
                    <h3>{accomodation.host.name}</h3>
                    <img src={accomodation.host.picture} alt={accomodation.host.name}/>
                </div>
            </div>
            <div className='accomodation__footer'>
                <ul>
                    {accomodation.tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <ul>
                    <Rating rating = {accomodation.rating} />
                </ul>
            </div>
            <div className='collapse__accomodation'>
            <Collapse
                title="Description"
                text={accomodation.description} />
            <Collapse
                title="Équipements"
                text={<ul>
                    {accomodation.equipments.map((equipment, index) => (
                        <li key={index}>
                            {equipment}
                        </li>
                    ))}
                </ul>} />
            </div>
        </section>
    )
}

export default Accomodation