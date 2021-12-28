import React from 'react'


function Signup() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>SignUp Now!</h1>
                    <p>
                        Register now and start using this platform
                    </p>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>
                                Register
                            </h4>
                            <input
                            name='fullName'
                            placeholder='Full Name'
                            type="text"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup