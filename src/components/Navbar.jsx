import React from 'react'
import { useNavigate } from "react-router-dom";
import {Navbar,Container,Button} from 'react-bootstrap';
import Backgnd from '../assets/Backgnd.png'

function Navbar() {
  const b= useNavigate();

  function  Reverse (e) {
    e.preventDefault()
    b("/");
  };
  return (
    <div >
        
        <Navbar className="bg-repeat" style={{backgroundImage:  `url(${Backgnd})` }}>
      <Container>
        <Navbar.Brand href="#home" className='font-mono text-lg font-semibold text-white'>Organize Me</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="gap-5 justify-content-end">
        <Button variant="outline-secondary" className='font-mono font-semibold text-white' onClick={Reverse}>Log Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    
    
  )
}

export default Navbar
