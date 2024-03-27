const ChevIcon = ({isOpen}) => {
    
    return (
        <i className={`fa fa-chevron-down fa-color icon-rotates ${isOpen ? 'rotate' : ''}`} aria-hidden="true"></i>
    );
};

export default ChevIcon;
