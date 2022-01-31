import React,{ useState} from 'react'
import {Link, } from 'react-router-dom'
import axios from '../../../utils/axios'

function Login() {

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const {username, password} = formState

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onLoginClick = async () => {
    try {
      const user = {
        username,
        password,
      };
      await axios.post("users/login", user);
      setFormState(formState);
      alert("Login Berhasil")
      
    } catch (error) {
      alert("Login Gagal")
    }
  }



    return (
        <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Log in now!</h1>
            <p className="lead">
            Welcome back at Cyclist. Please,Login to continue
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bold mb-3">Log in</h5>
                <input
                  name="username"
                  placeholder="Username"
                  type="text"
                  className="form-control my-2"
                  onChange={handleChange}
                  value={username}
                />
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="form-control my-2"
                  onChange={handleChange}
                  value={password}
                />
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <Link to="/signup">Or Sign-Up</Link>
                  <button
                    
                    className="btn btn-primary mt-2"
                    onClick={ onLoginClick }
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
