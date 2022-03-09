import React from 'react';
import './Nav.css';
import styled from 'styled-components';

const Ul = styled.ul`
    border-left: 2px solid black;
    z-index: 30;
    margin: 1rem 1rem;
    list-style: none;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: fixed;
    transform: ${( { open } ) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 80%;
    height: 100vh;
    background-color: var(--dark-color);
    margin: 0;
    transition: transform 1s ease-in-out;

    @media (min-width: 49em) {
        flex-direction: row;
        position: relative;
        height: 100%;
        width: 100%;
        background-color: unset;
        justify-content: end;
        transform: unset;
        border: unset;
    }
    

    li {
        margin: 2rem 0.5rem;
        z-index: 30;
    }

    a {
        border: none;
    text-decoration: overline;
    }

    a:hover {
        color: var(--small-headings);
    background-color: transparent;
    }

    
`;

const RightNav = ( {open} ) => {
  return (
    <Ul open={open}>
        <li><a href="#about">&gt; About</a></li>
                    <li><a href="/#projects">&gt; View Projects</a></li>
                    <li><a href="/#cv">&gt; View C.V.</a></li>
                    <li><a href="/#contact">&gt; Contact</a></li>
    </Ul>
  );
};

export default RightNav;