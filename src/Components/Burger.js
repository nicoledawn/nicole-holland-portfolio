import React, { useState } from 'react';
import styled from 'styled-components';
import './Burger.css';
import RightNav from './RightNav';

const StyledBurger = styled.div`
 z-index: 40;
 
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 1rem;
    align-items: end;

    @media (min-width: 49em){
        display: none;
    }

    .burger-icon {
        background-color: var(--main-text-color);
        
        height: 0.2rem;
        border-radius: 15px;
    }
    
    .long {
        width: 2.3rem;
    }
    
    .middle {
        width: ${({ open }) => open ? '2.3rem' : '1.8rem'};
        transition: 0.5s;
    }
    
    .short {
        width:  ${({ open }) => open ? '2.3rem' : '1.2rem'};
        transition: 0.5s;

`;

const Burger = () => {
    const [open, setOpen] = useState(false)



    return (
    <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div className='burger-icon long'></div>
            <div className='burger-icon middle'></div>
            <div className='burger-icon short'></div>
        </StyledBurger>
        <RightNav open={open} />
        </>

    )
}

export default Burger