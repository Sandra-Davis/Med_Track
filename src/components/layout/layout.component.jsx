import './layout.styles.css'
const Layout=()=>
{
    return(
        <div >
            <div className='orange'>
                <h1>Nurse Name</h1>
            </div>
            <div className='parallel'>
            <div className='layout'>
            <a href="/addpatient"><button className='add'>Add new patient</button></a>
            <br></br>
            <h1 className='occupied'>Occupied   :<label htmlFor=""  className='occupied'>10</label> </h1>
            <br></br>
            <h1 className='unoccupied'>Unoccupied   :<label htmlFor=""  className='unoccupied'>02</label></h1>
            <a href="/home"><button className='logout'>LOGOUT</button></a>
            </div>
            <div>
                <h1 className='ward'>ward</h1>
                <div className='column'>              
                <a href="/home"><button className='button1'></button></a>                
                <a href="/home"><button className='button2'></button></a>
                <a href="/home"><button className='button2'></button></a>             
                <a href="/home"><button className='button1'></button></a>
                <a href="/home"><button className='button1'></button></a>                
                <a href="/home"><button className='button1'></button></a>
                <a href="/home"><button className='button1'></button></a>              
                <a href="/home"><button className='button1'></button></a>
                <a href="/home"><button className='button1'></button></a>              
                <a href="/home"><button className='button1'></button></a>
            </div>
            </div>
            </div>
            
        </div>
    )
}
export {Layout};