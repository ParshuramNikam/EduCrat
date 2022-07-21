import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultNavbar.css';

const DefaultNavbar = () => {
    return (
        <nav className='navbar'>
            <div className='left_side'>
                <img src='/Images/logo/logo_icon.png' alt='' height={36} width={36} />
                <span>EduCrat</span>
            </div>
            <div className='right_side'>
                <Link to={"/start_teaching"}>Become a Tutor</Link>
                <Link to={"/tutor-signin"}>Sign in</Link>
                <Link to={"/tutor-signup"}>
                    <button>Join</button>
                </Link>
            </div>
        </nav>
    )
}

export default DefaultNavbar