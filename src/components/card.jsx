function Card({card}) {
    return (
            <article className="card" key={card.id}>
                <img className="card__cover" src={card.cover} alt={card.title} />
                <p>{card.title}</p>
            </article>
        )
    }

export default Card