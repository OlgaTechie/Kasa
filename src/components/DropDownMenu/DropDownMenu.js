import React, { useState, useRef, useEffect } from "react";
import './DropDownMenu.scss';

function DropDownMenu({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            contentRef.current.style.opacity = 1;
        } else {
            contentRef.current.style.maxHeight = '0px';
            contentRef.current.style.opacity = 0;
        }
    }, [isOpen]);

    return (
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <div className="dropdown-header" onClick={toggleMenu}>
                <span>{title}</span>
                <span className="chevron-icon">
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                    )}
                </span>
            </div>
            <div className={`dropdown-content ${isOpen ? "open" : ""}`}
                ref={contentRef}>
                {content}
            </div>
        </div>
    );
}

export default DropDownMenu;