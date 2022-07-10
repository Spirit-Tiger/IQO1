import React, { useState } from 'react'
import styled from 'styled-components';
import DashboardRightNav from './DashboardRightNav';

const DashboardBurger = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <DashboardRightNav open={open}/>
    </>
  )
}

export default DashboardBurger;


const StyledBurger = styled.div<{open: boolean}>`
    width: 38px;
    height: 38px;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        align-items: flex-end;
  }
  div {
    height: 6px;
    background-color: ${({ open }) => open ? '#ccc' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
        width: ${({ open }) => open ? '33px' : '38px'};
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
        width: 20px;
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
        width: ${({ open }) => open ? '33px' : '9px'};
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}; 
    }
  }
`;