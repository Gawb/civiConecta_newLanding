import './Member.css';
import './MemberMobile.css';
import linkedin from './LinkedIn - Civicon.svg';

const Member = ({ memberDetails }) => {

    const showMember = (memberDetails) => {
        return memberDetails.photo.map((photo, index) => (
            <section className='memberBox' key={index}>
                <div
                    className='photo-member'
                    style={{
                        backgroundImage: `url(${photo})`,
                        backgroundPosition: `${index === 3 ? 'bottom' : 'center'}`,
                    }}
                >
                </div>
                <div className='info-member'>
                    <h3 style={{ color: `var(${memberDetails.color[index]})` }}>
                        {memberDetails.name[index]}
                    </h3>
                    <p>
                        {memberDetails.profession[index]}
                    </p>
                    <div>
                    <a href={memberDetails.link[index]}>
                        <img src={linkedin} />
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
    )
}

export { Member };