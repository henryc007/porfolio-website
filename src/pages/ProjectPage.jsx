import ProfileProjects from '../components/ProfileProjects';
import AboutMe from '../components/AboutMe';
import NavBar from '../components/NavBar';
import ProfileDetails from '../components/ProfileDetails';
import {useState} from 'react';

function ProjectPage() {
    const [isSelected, setIsSelected] = useState('projects')

    const handleSelectionChange = (selectedItem) => {
        setIsSelected(selectedItem);
    };
    return (
        <>
            <NavBar setSelected={handleSelectionChange} currentlySelected={isSelected}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <ProfileDetails/>
                    </div>
                    <div className="col-lg-1">
                        <div className="vertical-line" style={{ borderLeft: '2px solid grey', height: '100%', marginLeft: "35px" }}></div>
                    </div>
                    <div className="col-lg-7" style={{ transition: 'opacity 5s ease-in-out'}}>
                        {isSelected === 'projects' ? (
                            <ProfileProjects />
                        ):(
                            <AboutMe/>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
