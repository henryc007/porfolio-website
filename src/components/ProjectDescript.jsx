import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ChevIcon from './ChevIcon';

const ProjectDescript = ({videoValue, videoDescript}) => {
    const [isOpen, setIsOpen] = useState({
        'theGroove': false,
        'recordRanch': false
    });

    const handleDescriptionClick = (clickedItem) => {
        setIsOpen(prevState => ({
            ...prevState,
            [clickedItem]: !prevState[clickedItem] 
        }));
    }

    return (
        <>
            <Button
                className="my-2"
                onClick={() => handleDescriptionClick(videoValue)}
                aria-controls={videoValue}
                aria-expanded={isOpen[videoValue]}
                style={{border: 'none', background: 'none', color: 'black', fontSize: '25px', marginLeft: '7px'}}
            >
                Description <ChevIcon isOpen={isOpen[videoValue]} />
            </Button>
            <Collapse in={isOpen[videoValue]}>
                <div className="card-body" style={{transition: 'height 100ms linear'}}>
                    <p id={videoValue} className="card-text mb-2" style={{fontSize: '19px', marginTop: '-10px', fontFamily: 'Roboto', marginLeft: '7px'}}>{videoDescript}</p>
                </div>
            </Collapse>
        </>
    )
}

export default ProjectDescript;