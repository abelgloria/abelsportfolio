import { NavLink } from "react-router-dom";
import NavbarLinks from "../Data/NavbarLinks";
import '../UI/Navbar.css'
import { useState } from "react";
import Resume from '../Data/PDF FILES/Resume.pdf'
export default function Navbar(){

    const navbarLinks = NavbarLinks.map((link)=>
        <NavLink className="navLinks" key={link.id} to={link.href} >{link.text}</NavLink>
    );

    // algorithm for mobile nav links
    const [buttonClicked, setButtonClicked] = useState(true);
    let mobileNavLink = "mobileNavLink";

    function showAndHideMobileNavLink(){
        console.log(buttonClicked);
        setButtonClicked(!buttonClicked);

        if(buttonClicked == true){
            document.getElementById(mobileNavLink).style.left = '0';
        }
        else{
            document.getElementById(mobileNavLink).style.left = '-50rem';
        }
    };


    // OUTPUT
    return(
        <>
            <div className="navContainer">
            {/* Regular Navbar Section  */}
                <NavLink className="navLogo" to="/" >Abel's Portfolio</NavLink>
                <div className="regularNavbar"> 
                    {navbarLinks}
                    <a className="navLinks" href={Resume} download >Resume</a>
                </div>

            {/* Mobile Navbar */}
                <div onClick={showAndHideMobileNavLink} className="mobileNav">
                    <hr className="mobileNavLine" />
                    <hr className="mobileNavLine" />
                    <hr className="mobileNavLine" />
                </div>
            </div>
                {/* mobile navbar menu  */}
            <div className="mobileNavLinks" id={mobileNavLink} >
                {navbarLinks}
                <a className="navLinks" href={Resume} download >Resume</a>
            </div>
        </>
    );
};  