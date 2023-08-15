import React, { useState } from 'react';
import arrow_left from "../assets/arrow_left.png"
import arrow_right from "../assets/arrow_right.png"

function Slideshow({ images }) {
    const [currentImageIndex, setcurrentImageIndex] = useState(0)

    // En fonction de l'index actuel, on passe à la première/dernière image si non on incrémente/décrémente l'index
    const previousImg = () => { setcurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1) }
    const nextImg = () => { setcurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1) }
    
    return (
        <div className="slideshow">
            <img className="slideshow__img" src={images[currentImageIndex]} alt="logement" />
            {images.length === 1 ? null : ( // S'il n'y a qu'une image alrs on n'affiche pas les flèches
                <div>
                    <img onClick={() => previousImg()}
                        className="slideshow__arrow arrow--left"
                        src={arrow_left}
                        alt="Précédente" />

                    <img onClick={() => nextImg()}
                        className="slideshow__arrow arrow--right"
                        src={arrow_right}
                        alt="Suivante" />
                      
                        {/* Affichage du compteur */}
                    <p className="slideshow__count"> {currentImageIndex + 1}/{images.length}</p>
                    
                </div>
            )}
        </div>
    )}

export default Slideshow