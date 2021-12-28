import React from 'react'
import {Link, Routes} from 'react-router-dom'
import picture from '../../../assets/images/image-2.jpg'
import './Advantages.css'


function Advantages() {
    return (
        <>

            <div className='Main-container'>
                <div className='Main-title'>
                    <h1>Bicycle leasing: all advantages in one list</h1>

                    <div className='main-button'>
                        <Link to='/sign-up' >
                            <buton className='btn btn-first btn-outline-primary' > employee </buton>
                        </Link>

                        <Link to='/sign-up' >
                            <buton className='btn btn-first btn-outline-primary' >  employer </buton>
                        </Link>       
                    </div>
                </div>
           

                <div className='main-picture'>
                    <img  src={picture} alt="No Image" style={{width: 500}}/>
                </div>   

            </div>
        </>
    )
}

export default Advantages
