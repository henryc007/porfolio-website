const AboutMe = () => {
    
    return (
        <>
        <div className="container d-flex align-items-center" style={{borderBottom: '3px solid black', marginTop: '40px'}}>
            <div className="row">
                <div className='col'>
                    <h1 style={{
                        fontFamily: 'Simplifica, sans-serif', 
                        fontSize: '70px',
                        }}>
                            About Me
                    </h1>
                </div>
            </div>
        </div>
        <div className="container" style={{marginTop: '20px'}}>
            <p style={{fontSize: '20px', fontFamily: 'Roboto'}}>
            Hello! My name's Henry Christiani, a soon-to-be Computer Science graduate eager to apply my academic 
            background towards a software engineering, web development, or UX/UI design role. Throughout my 
            time studying computer science, I’ve taken a wide array of courses that’ve given me a foundation 
            on the subject. Some of these courses include web development, data structures, algorithms, software 
            engineering, operating systems, networking, and databases. With a passion for problem-solving, 
            learning, development, design, and collaboration, I’m excited to connect with professionals and/or 
            work opportunities that share this enthusiasm. Please reach out to me directly through  
            <a href={"mailto:henrychristiani07@gmail.com"} style={{textDecoration: 'none'}}> email </a>
            or message me on <a href='https://linkedin.com/in/henry-christiani' target="_blank" style={{textDecoration: 'none'}}>LinkedIn </a>
            if you'd like to know more.
            </p>
        </div>

        <div className="container d-flex align-items-center" style={{borderBottom: '3px solid black', marginTop: '40px'}}>
            <div className="row">
                <div className='col'>
                    <h1 style={{
                        fontFamily: 'Simplifica, sans-serif', 
                        fontSize: '70px',
                        }}>
                            Technologies & Tools Experience
                    </h1>
                </div>
            </div>
        </div>

        <div className="container-fluid" style={{marginTop: '20px', marginBottom: '20px'}}>
            <div className="row g-4">
                <div className="col">
                    <div className="card" style={{width: '100%', padding: '0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease', fontFamily: 'Roboto'}}>
                        <div className="card-header" style={{backgroundColor: '#00246B', color: 'white'}}>
                            <b>Languages & Frameworks</b>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Python          
                            </li>
                            <li className="list-group-item">
                                JavaScript          
                            </li> 
                            <li className="list-group-item">
                                Flask          
                            </li>
                            <li className="list-group-item">
                                React          
                            </li>
                            <li className="list-group-item">
                                Bootstrap          
                            </li>
                            <li className="list-group-item">
                                Express          
                            </li>    
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{width: '100%', padding: '0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
                        <div className="card-header" style={{backgroundColor: '#00246B', color: 'white'}}>
                            <b>Markup & Styling</b> 
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                HTML          
                            </li>
                            <li className="list-group-item">
                                CSS          
                            </li> 
                        </ul>
                    </div>
                    <div className="card mt-4" style={{width: '100%', padding: '0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
                        <div className="card-header" style={{backgroundColor: '#00246B', color: 'white'}}>
                            <b>Design Tools</b>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Figma          
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{width: '100%', padding: '0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
                        <div className="card-header" style={{backgroundColor: '#00246B', color: 'white'}}>
                            <b>Database Technologies</b>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                SQL          
                            </li>
                            <li className="list-group-item">
                                Rational Database Management Systems          
                            </li>
                            <li className="list-group-item">
                                PostgreSQL         
                            </li>
                            <li className="list-group-item">
                                SQLAlchemy         
                            </li>  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe;