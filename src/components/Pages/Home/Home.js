import React from 'react'
import {Link, Routes} from 'react-router-dom'
import picture from '../../../assets/images/image-1.jpg'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
    <>
        <div>
        
            <div className='Main-container'>
                <div className='secondary-container'>
                    <h1 className='main-text'>Pushing limits for our cyclist.</h1>
                    <p>As an employee, enjoy your favorite lease bike.
                        healthy to work...Everyone wants that, right!
                    </p>
            
                    <div className='main-button'>
                        <Link to='/sign-up' >
                            <buton className='btn btn-first btn-outline-primary' > employee </buton>
                        </Link>

                        <Link to='/sign-up' >
                            <buton className='btn btn-first btn-outline-primary' > employer </buton>
                        </Link>       
                    </div>
            
                </div>    
            
                <div className='main-picture'>
                    <img  src={picture} alt="No Image" style={{width: 450}}/>
                </div>   
            </div>

            <div className='card-container'>
                Test
            </div>
        

        </div> 
    </>
    )
}

export default Home
