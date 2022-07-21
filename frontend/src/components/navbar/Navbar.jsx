import React from 'react'
import DefaultNavbar from './defaultNavbar/DefaultNavbar'
import TutorNavbar from './tutorNavbar/TutorNavbar'

const Navbar = ({ navbarType }) => {
    if (navbarType) {
        if(navbarType === "home") return <DefaultNavbar />
        if(navbarType === "start_teaching") return <TutorNavbar />
        // if(navbarType === "")

    } else {
        return (
            <div>NOT A VALID NAVBAR</div>
        )
    }
}

export default Navbar