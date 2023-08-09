import { useState } from 'react';
import arrow_up from "../assets/arrow_up.png"

function Collapse({ title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const displayText = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='collapse'>
            <div className='collapse__title'>
                <h3>{title}</h3>
                <img onClick={displayText}
                    className={`"collapse__arrow ${isOpen ? "arrow_down" : "arrow_up"}`}
                    src={arrow_up} alt="flèche pour dévoiler le contenu"/>
            </div>
            <div className={`collapse__displayed__text ${isOpen ? "" : "collapse__hiddenText"}`}>
                <p className='collapse__text'>{text}</p>
            </div>
        </div>
    )
}

export default Collapse