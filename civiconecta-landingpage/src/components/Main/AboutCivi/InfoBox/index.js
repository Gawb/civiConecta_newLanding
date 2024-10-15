import './InfoBox.css';
import './InfoBoxMobile.css';
import { useState} from 'react';
import { infoBoxElements, heartBrainIcon } from '../aboutInfo'


const InfoBox = ({ imgArrow }) => {

    const [isOpen, setIsOpen] = useState(Array(infoBoxElements.title.length).fill(false));

    const toggleBox = (index) => {
        const updatedIsOpen = isOpen.map((item, i) => (i === index ? !item : item));
        setIsOpen(updatedIsOpen);
    };


    return (

        <div className="info-box">
            {infoBoxElements.title.map((title, index) => (
                <div key={index} className={`boxes ${isOpen[index] ? 'open' : 'closed'}`}>
                    <div className="info-item">
                        {heartBrainIcon}
                        <h3>{title}</h3>
                        <div className={`button-container ${isOpen[index] ? 'open' : 'closed'}`}>
                            <button onClick={() => toggleBox(index)}
                            >{` ${isOpen[index] ? 'Ocultar' : 'Mostrar'}`}
                             {imgArrow}
                            </button>
                        </div>
                    </div>
                    <div  className={`message-content ${isOpen[index] ? 'open' : 'closed'}`}>
                        <p>{infoBoxElements.message[index]}</p>
                    </div>
                </div>

            ))}
        </div>
    )

}

export { InfoBox };