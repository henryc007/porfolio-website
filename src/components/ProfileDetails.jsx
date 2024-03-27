const ProfileDetails = () => {
    
    return (
        <div className="container-fluid" style={{ padding: '10px', marginLeft: '20px'}}>
            <div className='row'>
                <img className="rounded-circle my-4 img-fluid" src="src/assets/images/profilePic2.png" alt="profile pic" style={{
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out'
                }}
                />
            </div>
            <div id="profile-details" className="card" style={{ border: '2px solid #dee2e6', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease', borderRadius: '10px', overflow: 'auto' }}>
                <div className="card-body">
                    <h2 className="card-title"> Location: </h2>
                    <p className="card-text"> 
                        <img className="" src="src/assets/images/deer.png" alt="portland icon" style={{width: '39px', height: '32px', marginRight: '7px', marginBottom: '4px'}}/>
                        Portland, OR 
                    </p>
                    <h2 className="card-title"> Education: </h2>
                    <p className="card-text d-flex">
                        <img className="" src="src/assets/images/oregonbeaver.png" alt="osu icon" style={{width: '40px', height: '28px', marginRight: '7px', marginBottom: '4px'}}/>
                        Oregon State University: Computer Science
                    </p>
                    <p className="card-text d-flex">
                        <img className="" src="src/assets/images/oregonduck.png" alt="u of o icon" style={{width: '40px', height: '32px', marginRight: '7px', marginBottom: '4px'}}/>
                        University of Oregon: Sociology
                    </p>
                    <h2 className="card-title"> Contact Info: </h2> 
                    <p className="card-text d-flex"> 
                        <img className="" src="src/assets/images/envelope.png" alt="envelope icon" style={{width: '25px', height: '28px', marginRight: '7px', marginBottom: '4px'}}/>
                        <a href={"mailto:henrychristiani07@gmail.com"} style={{textDecoration: 'none'}}>henrychristiani07@gmail.com</a></p>
                    <h2 className="card-title"> Links: </h2> 
                    <p className="card-text">
                        <a href='https://linkedin.com/in/henry-christiani' target="_blank" style={{textDecoration: 'none'}}>
                            <img className="" src="src/assets/images/linkedin.png" alt="linkedin icon" style={{width: '32px', height: '32px', marginRight: '6px', marginBottom: '4px'}}/>
                            LinkedIn
                        </a>
                    </p>
                    <p className="card-text">
                        <a href="https://github.com/henryc007" target="_blank" style={{textDecoration: 'none'}}>
                            <img className="" src="src/assets/images/github.png" alt="github icon" style={{width: '32px', height: '32px', marginRight: '6px', marginBottom: '4px'}}/>
                            Github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;