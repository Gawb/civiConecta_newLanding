import './School.css';
import './SchoolMobile.css';
import { useState } from 'react';

const plus = (
    <svg className='read-more-icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18M12 6V18" stroke="#ec5f7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const minus = (
    <svg className='read-more-icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L18 12" stroke="#ec5f7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const School = ({ schoolData }) => {
    const [isOpen, setIsOpen] = useState(Array(schoolData.logo.length).fill(false));

    const toggleBox = (index) => {
        const updatedIsOpen = isOpen.map((item, i) => (i === index ? !item : item));
        setIsOpen(updatedIsOpen);
    };

    const moreButton = (review, index) => {
        if (review.length > 100) {
            return (
                <p
                    id={`review-${index}`}
                    className='more-button'
                    onClick={() => toggleBox(index)}
                    style={{ paddingTop: `${isOpen[index] ? '5.2vw' : '0vw'}` }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && toggleBox(index)}
                    aria-expanded={isOpen[index]}
                    aria-controls={`review-box-${index}`}
                >
                    {isOpen[index] ? <>...Leer menos {minus}</> : <>...Leer más {plus}</>}
                </p>
            );
        }
    };

    const createSchool = (data) => (
        data.logo.map((logo, index) => (
            <section key={index} className='school' aria-labelledby={`school-${index}`}>
                <div className='logo-school'
                    style={{
                        backgroundImage: `url(${logo})`,
                    }}
                />
                <h3 id={`school-${index}`}>{data.schoolName[index]}</h3>
                <p>{data.reviewer[index]}</p>
                <p>{data.profession[index]}</p>
                <div
                    id={`review-box-${index}`}
                    className={`review-box ${isOpen[index] ? 'open' : 'close'}`}
                    aria-hidden={!isOpen[index]}
                >
                    <p className='review'>
                        {schoolData.review[index]}
                    </p>
                </div>
                {moreButton(data.review[index], index)}
            </section>
        ))
    );

    return (
        <>
            {createSchool(schoolData)}
        </>
    );
};

export { School };
