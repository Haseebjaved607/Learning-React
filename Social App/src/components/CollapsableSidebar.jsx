import PropTypes from 'prop-types';
import { useState } from 'react';

const Sidebar = ({ selectedTab, setselectedTab }) => {
    const [isHomeOpen, setIsHomeOpen] = useState(true); // State for Home section
    const [isCreatePostOpen, setIsCreatePostOpen] = useState(true); // State for Create Post section

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '280px' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                    <button 
                        className="btn btn-toggle d-inline-flex align-items-center rounded border-0" 
                        onClick={() => setIsHomeOpen(prev => !prev)} 
                        aria-expanded={isHomeOpen}
                    >
                        Home
                    </button>
                    <div className={`collapse ${isHomeOpen ? 'show' : ''}`}>
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <a href="#" className={`link-body-emphasis d-inline-flex text-decoration-none rounded ${selectedTab === "Home" ? "active" : ""}`} onClick={() => setselectedTab("Home")}>
                                    Overview
                                </a>
                            </li>
                            {/* You can add more sub-items under Home if needed */}
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <button 
                        className="btn btn-toggle d-inline-flex align-items-center rounded border-0" 
                        onClick={() => setIsCreatePostOpen(prev => !prev)} 
                        aria-expanded={isCreatePostOpen}
                    >
                        Create Post
                    </button>
                    <div className={`collapse ${isCreatePostOpen ? 'show' : ''}`}>
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <a href="#" className={`link-body-emphasis d-inline-flex text-decoration-none rounded ${selectedTab === "Create post" ? "active" : ""}`} onClick={() => setselectedTab("Create post")}>
                                    New Post
                                </a>
                            </li>
                            {/* You can add more sub-items under Create Post if needed */}
                        </ul>
                    </div>
                </li>
            </ul>
            <hr />
        </div>
    );
}

// Add PropTypes for validation
Sidebar.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    setselectedTab: PropTypes.func.isRequired,
};

export default Sidebar;
