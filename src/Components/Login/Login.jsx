import React, { useEffect, useState } from 'react'
import "../Login/Login.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const navigate = useNavigate();

  useEffect(() => {
      const auth = localStorage.getItem('user');
      if (auth) {
          navigate("/")
      }
  }, [])

  const loginsubmit = async () => {
      let result = await fetch("http://localhost:5000/login", {
          method: 'post',
          body: JSON.stringify({ email, password }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      result = await result.json();
      console.warn(result)
      if (result.auth) {
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', JSON.stringify(result.auth));
          navigate("/home")
      } else {
          alert("Please enter connect details")
      }
  }
  return (
    <>

      <div className="cover">

        <div className="card">
          <div className="card-body">

            <div className="app-brand justify-content-center">

            </div>

            <h4 className="mb-2">Welcome to Sneat! 👋</h4>
            <p className="mb-4">Please Login-in to your account and start the adventure</p>

            <div className="mb-3" >
              <div className="mb-3">
                <label for="email" className="form-label">Email or Username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)} value={email}
                  name="email-username"
                  placeholder="Enter your email or username"
                  autofocus />
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" for="password">Password</label>
                  {/* <a href="auth-forgot-password-basic.html">
                      <small>Forgot Password?</small>
                    </a> */}
                </div>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} value={password}
                    className="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password" />
                  <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"
                  // id="remember-me" 
                  />
                  <label className="form-check-label" for="remember-me"> Remember Me </label>
                </div>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary d-grid w-100" type="submit" onClick={() => {

                  loginsubmit()
                }} >Sign in</button>
              </div>
            </div>

            <p className="text-center">
              <span>New on our platform?</span>
              <Link to="/registaion">
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>

      </div>



      {/* <div className="cover">


  </div> */}

    </>
  )
}

export default Login
