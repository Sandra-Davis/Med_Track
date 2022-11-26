import './medicine_details.styles.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
const Medicine=()=>
{
    return(
        <div>
            
            <Navbar className="nv">
          <Nav className="me-auto">
          <div className='flex-container'>Nurse_name</div>
          <Nav.Link className='a'href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
      </Navbar>
      <div className="flex-container2">
        <br></br><br></br><br></br>
            PATIENT DETAILS<br></br>
            <br></br><br></br><br></br>
            Name:
            <br></br><br></br><br></br><br></br>
            Consulting Doctor:
            <br></br><br></br><br></br><br></br>
            Disease Details:
            <br></br><br></br><br></br><br></br>
            Medicines:
            <br></br><br></br><br></br><br></br>
            <button className="remove">REMOVE</button>
            <div className='flex-container3'>
        
        <pre>                 Morning        Afternoon       Night<br></br><br></br><br></br> 
        </pre>
        <div className='grid'>
          <h5>Medicine1</h5>
          <input type="checkbox" className=''/>
          <input type="checkbox" className=''/>
          <input type="checkbox" className=''/>
        </div>
      </div> 
      </div>
      <button className="submit">SUBMIT</button>
      
        </div>
     
    )
}

export {Medicine}; 