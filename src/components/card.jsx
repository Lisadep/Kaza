import { Link } from 'react-router-dom';

function Card({card}) {
    return (
        <Link to={"/accomodation/" + card.id}>
            <article className="card" key={card.id}>
                <img className="card__cover" src={card.cover} alt={card.title} />
                <p>{card.title}</p>
            </article>
        </Link>
        )
    }

export default Card