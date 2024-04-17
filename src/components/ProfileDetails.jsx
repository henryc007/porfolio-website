import profilePic from '../assets/images/profilePic.png';
import deerIcon from '../assets/images/deer.png';
import oregonBeaver from '../assets/images/oregonbeaver.png';
import oregonDuck from '../assets/images/oregonduck.png';
import envelope from '../assets/images/envelope.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import phone from '../assets/images/phone.png'

const ProfileDetails = () => {

    return (
        <div className="container-fluid" style={{ padding: '10px'}}>
            <div className='row'>
                <div className="col">
                <img className="my-4 img-fluid shadow" src={profilePic} alt="profile pic" style={{
                    borderRadius: '100%'
                }}
                />
                </div>
            </div>
            <div id="profile-details" className="card shadow" style={{ border: '2px solid #dee2e6', borderRadius: '10px', overflow: 'auto' }}>
                <div className="card-body">
                    <h2 className="card-title"> Location: </h2>
                    <p className="card-text"> 
                        <img className="" src={deerIcon} alt="portland icon" style={{width: '39px', height: '32px', marginRight: '7px', marginBottom: '4px'}}/>
                        Portland, OR 
                    </p>
                    <h2 className="card-title"> Education: </h2>
                    <p className="card-text d-flex">
                        <img className="" src={oregonBeaver} alt="osu icon" style={{width: '40px', height: '28px', marginRight: '7px', marginBottom: '4px'}}/>
                        Oregon State University: Computer Science
                    </p>
                    <p className="card-text d-flex">
                        <img className="" src={oregonDuck} alt="u of o icon" style={{width: '40px', height: '32px', marginRight: '7px', marginBottom: '2px'}}/>
                        University of Oregon: Sociology
                    </p>
                    <h2 className="card-title"> Contact Info: </h2>
                    <p className="card-text d-flex"> 
                        <img className="" src={phone} alt="phone icon" style={{width: '28px', height: '28px', marginRight: '7px', marginBottom: '2px'}}/>
                        (208) 230-3423
                    </p> 
                    <p className="card-text d-flex"> 
                        <img className="" src={envelope} alt="envelope icon" style={{width: '25px', height: '28px', marginRight: '7px', marginBottom: '4px'}}/>
                        <a href={"mailto:henrychristiani07@gmail.com"} style={{textDecoration: 'none'}}>henrychristiani07@gmail.com</a></p>
                    <h2 className="card-title"> Links: </h2> 
                    <p className="card-text">
                        <a href='https://linkedin.com/in/henry-christiani' target="_blank" style={{textDecoration: 'none'}}>
                            <img className="" src={linkedin} alt="linkedin icon" style={{width: '32px', height: '32px', marginRight: '6px', marginBottom: '4px'}}/>
                            LinkedIn
                        </a>
                    </p>
                    <p className="card-text">
                        <a href="https://github.com/henryc007" target="_blank" style={{textDecoration: 'none'}}>
                            <img className="" src={github} alt="github icon" style={{width: '32px', height: '32px', marginRight: '6px', marginBottom: '4px'}}/>
                            Github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;