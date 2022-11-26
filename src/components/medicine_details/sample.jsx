import './medicine_details.styles.css'
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
const Medicine=()=>
{
    const [name,setName]=useState();
    const [med,setMed]=useState([]);
    // const handle=(e)=>{
    //     setName(e.target.value);
    // }
    let num=10;
    let stri="Unnimaya";
    let me=[{name:"Medividne",morning:true,afternoon:true,night:true}];
    async function k()
    {
        let result=await fetch("http://localhost:5000/add",{
            method:'post',
            body:JSON.stringify({num,stri,stri,stri,me}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result=await result.json();
        console.log(result);
    }
    useEffect(() => {
        k();
    })
    
    return(
        <div>
            
            <Navbar className="nv">
          <Nav className="me-auto">
          <div className='flex-container'>Nurse_name</div>
          <Nav.Link className='a'href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
      </Navbar>
      {/* {
           med.map((item)=>(
            <div>
                Toimepass
                </div>
           ))
        } */}
      <div className="flex-container2">

        <br></br><br></br><br></br>
        <div className='flex-container3'>
        <pre>               Morning         Afternoon         Night<br></br><br></br><br></br>
        <ul>
        <li>Medicine1</li>
        </ul>  

        </pre>
       
      </div>
            PATIENT DETAILS<br></br>
            <br></br><br></br><br></br>
            Name:
            {/* <input value={name} onChange={(e)=>handle(e)}></input> */}
            <br></br><br></br><br></br><br></br>
            Consulting Doctor:
            <br></br><br></br><br></br><br></br>
            Disease Details:
            <br></br><br></br><br></br><br></br>
            Medicines:
            <br></br><br></br><br></br><br></br>
            <button className="remove">REMOVE</button>
            
      </div>
      <button className="submit">SUBMIT</button>
        </div>
     
    )
}

export {Medicine};