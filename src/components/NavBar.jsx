import { useEffect } from 'react';

const NavBar = ({ setSelected, currentlySelected }) => {
    const handleSelection = (selectedItem) => {
        setSelected(selectedItem);
    };

    useEffect(() => {}, [currentlySelected]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-dark border-3 rounded-bottom-4" style={{backgroundColor: '#00246B' }}>
            <div className="container-fluid">
                <h1 className="navbar-brand" style={{ color: 'white', fontFamily: 'Simplifica, sans-serif', fontSize: '90px', paddingLeft: '20px' }}>Henry Christiani</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" style={{fontSize: '25px'}}>
                        <li className="nav-item">
                            <a className={`nav-link ${currentlySelected === 'projects' ? 'active' : ''}`} onClick={() => handleSelection('projects')} style={{cursor: 'pointer'}}>
                                Projects
                            </a>
                           
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentlySelected === 'about me' ? 'active' : ''}`} onClick={() => handleSelection('about me')} style={{cursor: 'pointer'}}>
                                About Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
