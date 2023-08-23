import empty_star from "../assets/empty-star.png"
import full_star from "../assets/full-star.png"

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div className="stars">
      {stars.map((star, index) => rating >= star ? (
          <img key={index} src={full_star} alt="Note du logement" />
          ) : (
          <img key={index} src={empty_star} alt="Note du logement" />
          )
      )}
      </div>
    );
};

export default Rating;