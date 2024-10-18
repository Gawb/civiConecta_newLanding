import './Member.css';
import './MemberMobile.css';
import linkedin from './LinkedIn - Civicon.svg';

const Member = ({ memberDetails }) => {
    const showMember = (memberDetails) => {
        return memberDetails.photo.map((photo, index) => (
            <section className='memberBox' key={index} aria-labelledby={`member-name-${index}`} role="group">
                <div 
                    aria-label='imagen de miembro de Civiconecta'
                    className='photo-member'
                    style={{
                        backgroundImage: `url(${photo})`,
                        backgroundPosition: `${index === 3 ? 'bottom' : 'center'}`,
                    }}
                >
                </div>
                <div className='info-member' aria-label='información de miembro de Civiconecta'>
                    <h3 id={`member-name-${index}`} style={{ color: `var(${memberDetails.color[index]})` }}>
                        {memberDetails.name[index]}
                    </h3>
                    <p>
                        {memberDetails.profession[index]}
                    </p>
                    <div>
                        <a href={memberDetails.link[index]} aria-label={`Perfil de LinkedIn de ${memberDetails.name[index]}`}>
                            <img src={linkedin} alt='linkedin link' />
                        </a>
                    </div>
                </div>
            </section>
        ));
    }

    return (
        <>
            {showMember(memberDetails)}
        </>
    );
}

export { Member };
