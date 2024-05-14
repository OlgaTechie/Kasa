import React, { useState } from "react";
import './DropDownMenu.scss';

function DropDownMenu({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <div className="dropdown-header" onClick={toggleMenu}>
                <span>{title}</span>
                <span className="chevron-icon">{isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}</span>
            </div>
            <div className="dropdown-content">{content}</div>
        </div>
    );
}

export default DropDownMenu;