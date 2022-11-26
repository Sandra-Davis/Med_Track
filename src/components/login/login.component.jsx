import './login.styles.css'
import Pic from "./3.png";
import React from 'react';
const Login=()=>
{
    return(
        <div className='loginp'>
        <form action="" >
            <center className='square'>
            <img src={Pic} />
            <div className='x'>
            <div className='y'>  
                <input type="text" placeholder="Username" className='username1' /> 
            </div> 
            <br></br>
            <div className='y'> 
                <input type="text" placeholder="Password" className='username1' />
            </div>  
            <br></br>
            <a href="/layout"><button type="submit" className='login'>Login</button></a>
            </div>
            </center> 
        </form>
        </div>
        )
}

export {Login};