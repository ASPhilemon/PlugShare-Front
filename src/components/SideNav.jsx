
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeart, faQuestionCircle, faStar, faAward, faSignOutAlt, faEdit, faHandshake, faHandsHelping, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../SideNav.css';

function SideNav({ isOpen, toggleSideNav }) {
    const location = useLocation();

    return (
        <>
            <div className={`sidenav ${isOpen ? 'd-block side-nav-open' : 'd-none'} d-lg-block`}>
                <div className="side-nav-content" onClick={isOpen && toggleSideNav}>
                    
                    {/* Profile Section */}
                    <div className="profile-section">
                        <div className="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic rounded-circle me-3" />
                            <div className="flex-grow-1">
                                <h6 className="profile-name mb-0">John Doe</h6>
                            </div>
                            <FontAwesomeIcon icon={faEdit} className="text-muted edit-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-1">
                                    <FontAwesomeIcon icon={faStar} className="fa-fw me-3 pe-4"/> 
                                <span className="profile-name">56</span>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <FontAwesomeIcon icon={faAward} className="fa-fw me-3 pe-4"/>
                               <span className="profile-name">2</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <hr className="section-divider mb-3" />

                    {/* Links Section */}
                    <div className="section">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faUsers} className="fa-fw me-3 pe-4"/>                          
                            Community List
                        </Link>
                        <Link to="/personal-list" className={`nav-link ${location.pathname === '/personal-list' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faHeart} className="fa-fw me-3 pe-4"/>
                            Personal List
                        </Link>
                        <Link to="/Plugs" className={`nav-link ${location.pathname === '/Plugs' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faLightbulb} className="fa-fw me-3 pe-4"/>
                            Community Plugs
                        </Link>
                        <Link to="/Endorsers" className={`nav-link ${location.pathname === '/Endorsers' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faHandshake} className="fa-fw me-3 pe-4"/>
                            Endorsers
                        </Link>
                        <Link to="/MyEndorsements" className={`nav-link ${location.pathname === '/MyEndorsements' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faHandsHelping} className="fa-fw me-3 pe-4"/>
                            My Endorsements
                        </Link>
                        <Link to="/faqs" className={`nav-link ${location.pathname === '/faqs' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faQuestionCircle} className="fa-fw me-3 pe-4"/> 
                            FAQs
                        </Link>
                    </div>

                    {/* Logout Button at the bottom */}
                    <div className="logout-section">
                        <button className="btn btn-link text-danger" onClick={toggleSideNav}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="me-3 fa-fw pe-4"/> Logout
                        </button>
                    </div>
                </div>
            </div>  

            {isOpen && <div className="overlay" onClick={toggleSideNav}></div>}
        </>
    );
}

export default SideNav;
