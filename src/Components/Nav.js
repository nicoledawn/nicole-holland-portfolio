import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import './Nav.css';

const Nav = () => {

    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            setShow(true)
        } else if (window.location.pathname === '/tonquin-vista') {
            setShow(true)
        } else if (window.location.pathname === '/viewport') {
            setShow(true)
        } else if (window.location.pathname === '/blubird') {
            setShow(true)
        } else if (window.location.pathname === '/cloud-9') {
            setShow(true)
        }  else if (window.location.pathname === '/portfolio-site') {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }


    }, []);

    


    return (
        <header className={`header-nav ${show && 'show-nav'}`}>

            <nav>
                <NavLink className="logo-home" to="/">NH</NavLink>
                <Burger />

            </nav>


        </header>















    );
};

export default Nav;