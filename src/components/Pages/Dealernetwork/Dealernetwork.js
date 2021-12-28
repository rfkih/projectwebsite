import React from 'react'
import {Link, Routes} from 'react-router-dom'
import picture from '../../../assets/images/image-3.jpg'
import './Dealernetwork.css'

function Product() {
    return (
        <>
            <div className='Dealer-container'>
                <div>
                    <div>
                        <h1>Choose your dream bike at a local bike dealer</h1>
                        <p>Choose your favourite bike from one of the more than 11000 affiliated bicylce shops.</p>
                        <p>Is your local dealer not lister? Give us his contact details and we will see if we can set up a partnership.</p>
                    </div>
                    <div>
                        <Link to='/sign-up' >
                            <buton className='btn btn-first btn-outline-primary' > View the Dealernetwork </buton>
                        </Link>
                    </div>
                </div>

                <div className='main-picture'>
                    <img  src={picture} alt="No Image" style={{width: 550}}/>
                </div>  
           

    
            </div>
        </>
    )
}

export default Product
