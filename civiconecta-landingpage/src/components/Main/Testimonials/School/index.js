import './School.css';
import './SchoolMobile.css';
import { useState, useEffect } from 'react';


const plus = <svg className='read-more-icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H18M12 6V18" stroke="#ec5f7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>;

const minus = <svg className='read-more-icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L18 12" stroke="#ec5f7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>;

const School = ({ schoolData }) => {

    const [isOpen, setIsOpen] = useState(Array(schoolData.logo.length).fill(false));

    const toggleBox = (index) => {
        const updatedIsOpen = isOpen.map((item, i) => (i === index ? !item : item));
        setIsOpen(updatedIsOpen);
    };

    console.log(isOpen);

    const moreButtom = (review, index) => {

        if (review.length > 100) {
            return (
                <p id={`review-${index}`} className='more-button' onClick={() =>toggleBox(index)}
                    style={{paddingTop: `${isOpen[index]? '5.2vw': '0vw'}` }}
                >
                    {isOpen[index] ? <>...Leer menos{minus}</>: <>...Leer más {plus}</>}
                </p>
            )
        }
    };

    const createSchool = (data) => (
        data.logo.map((logo, index) => (
            <section key={index} className='school'>
                <div className='logo-school'
                    style={{
                        backgroundImage: `url(${logo})`,
                    }}
                >
                </div>
                <h3>{data.schoolName[index]}</h3>
                <p>{data.reviewer[index]}</p>
                <p>{data.profession[index]}</p>
                <div className={`review-box ${isOpen[index]? 'open': 'close'}`}>
                    <p className='review'>
                        {schoolData.review[index]}
                    </p>
                </div>
                {moreButtom(data.review[index], index)}
            </section>
        ))
    );

    return (
        <>
            {createSchool(schoolData)}
        </>

    )
}

export { School };