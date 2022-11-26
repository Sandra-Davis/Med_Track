import './addpatient.styles.css'
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Addpatient=()=>
{
    const [isSelected1,setButton1]=useState(false); 
    function handleClick1(){ 
        setButton1(true); 
    }

    const [isSelected2,setButton2]=useState(false); 
    function handleClick2(){ 
        setButton2(true); 
    }

    const [isSelected3,setButton3]=useState(false); 
    function handleClick3(){ 
        setButton3(true); 
    }

    const [isSelected4,setButton4]=useState(false); 
    function handleClick4(){ 
        setButton4(true); 
    }

    const [isSelected5,setButton5]=useState(false); 
    function handleClick5(){ 
        setButton5(true); 
    }

    const [isSelected6,setButton6]=useState(false); 
    function handleClick6(){ 
        setButton6(true); 
    }

    const [isSelected7,setButton7]=useState(false); 
    function handleClick7(){ 
        setButton7(true); 
    }

    const [isSelected8,setButton8]=useState(false); 
    function handleClick8(){ 
        setButton8(true); 
    }


    return(
     <div>
        <div>
        <Navbar className="nv2">
          <Nav className="me-auto">
          <div className='flex-containerr'>Nurse_name</div>
          <Nav.Link className='aa'href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
      </Navbar>
 
      <div className='parallell'>
      <div className="flex-container22">
        <br></br><br></br><br></br>
            PATIENT DETAILS<br></br>
            <br></br><br></br><br></br>
            <label for="username">Name:</label>
            <input type="text" id="name"></input>
            <br></br><br></br><br></br><br></br>
            <label for="consultingdoctor">  Consulting Doctor:</label>
            <input type="text" id="doctor"></input>
            <br></br><br></br><br></br><br></br>
            <label for="disease">Disease Details:</label>
            <input type="text" id="disease"></input>
            <br></br><br></br><br></br><br></br>
            <label for="medicines">Medicines:</label>
            <input type="text" id="medicines"></input><br></br>
            <br></br><br></br><br></br><br></br>
            <pre>                 Morning        Afternoon       Night<br></br><br></br><br></br> 
            </pre>
            <div className='gridd'>
          <h5>Medicine1</h5>
          <input type="checkbox" className=''/>
          <input type="checkbox" className=''/>
          <input type="checkbox" className=''/>
        </div>
            <button className="submitt">SUBMIT</button>
            <div className='flex-container33'>
                
               <h4> SELECT BED</h4><br></br>
            <div className='column'>  
                <button className='button1' onClick={handleClick1} style={{backgroundColor:isSelected1 ? "#E96317" : "#D9D9D9"}}></button>                
                <button className='button1' onClick={handleClick2} style={{backgroundColor:isSelected2 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick3} style={{backgroundColor:isSelected3 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick4} style={{backgroundColor:isSelected4 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick5} style={{backgroundColor:isSelected5 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick6} style={{backgroundColor:isSelected6 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick7} style={{backgroundColor:isSelected7 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick8} style={{backgroundColor:isSelected8 ? "#E96317" : "#D9D9D9"}}></button>
            </div>
            </div>
            </div> 
            </div>
        </div>
     </div>
    )
}


export {Addpatient};