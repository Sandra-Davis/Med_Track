import './layout.styles.css'
import React,{useState} from 'react';
import { useEffect } from 'react';
 
var Nurse_Name="nurse";
const Layout=()=>
{
    const [occupied,setCounto]=useState(0);
    const [unoccupied,setCountu]=useState(8);
    function submit(){     
        setCounto(occupied+1);
        setCountu(unoccupied-1);
    }
    function remove(){
        setCounto(occupied-1);
        setCountu(unoccupied+1);
    }  
    async function getfetails()
    {
        let result = await fetch("http://127.0.0.1:8000/Med_Track");
        console.log(result,"dsdf");
    }

    useEffect(()=>{
     getfetails();   
    })

    return(
        <div >
            <div className='orange'>
                <h1>{Nurse_Name}</h1>
            </div>
            <div className='parallel'>
                <div className='layout'>
                    <a href="/addpatient"><button className='add'>Add new patient</button></a>
                    <br></br>
                    <h1 className='occupied'>Occupied   :<label htmlFor=""  className='occupied'>{occupied}</label> </h1>
                    <br></br>
                    <h1 className='unoccupied'>Unoccupied   :<label htmlFor=""  className='unoccupied'>{unoccupied}</label></h1>
                    <a href="/home"><button className='logout'>LOGOUT</button></a>
                </div>
             
                {/* <h1 className='ward'>ward</h1> */}
                <div className='column'>              
                    <button className='button1' onClick={submit}></button>                 
                    <button className='button2' onClick={remove}></button> 
                    <button className='button2'></button>             
                    <button className='button1'></button>
                    <button className='button1'></button>                
                    <button className='button1'></button>
                    <button className='button1'></button>              
                    <button className='button1'></button>
                    <button className='button1'></button>              
                    <button className='button1'></button>
                </div>    
            </div>   
        </div>
    )
}
export {Layout};