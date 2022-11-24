import './login.styles.css'
const Login=()=>
{
    return(
        <div className='loginp'>
        <form action="" >
            <center className='square'>
            <div className='x'>
            <div className='y'>  
                <label htmlFor="username"  contenteditable="true" className='username1'>Username</label> 
            </div> 
            <br></br>
            <div className='y'> 
                <label htmlFor="passw" contenteditable="true" className='username1'>Password</label> 
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