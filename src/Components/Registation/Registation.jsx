import React, { useState } from 'react'
import "../Login/Login.css"
import { Link, useNavigate } from 'react-router-dom'
const Registation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate();

//   const Registersubmit = async () => {
//     console.warn(name, email, password);
//     let result = await fetch("http://localhost:8000/register", {
//         method: 'post',
//         body: JSON.stringify({ name, email, password }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     result = await result.json();
//     console.warn(result);
//     localStorage.setItem("user", JSON.stringify(result.result))
//     // localStorage.setItem("token", JSON.stringify(result.auth))

//     navigate('/')
// }~
 const Registersubmit = async () => {
        console.warn(name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));

        navigate('/')
    }
  return (
    <div className="cover">

      <div className="card">
        <div className="card-body">

          {/* <div className="app-brand justify-content-center">
          <a href="index.html" className="app-brand-link gap-2">
            <span className="app-brand-logo demo">
             
            </span>
            <span className="app-brand-text demo text-body fw-bold">Sneat</span>
          </a>
        </div> */}

          <h4 className="mb-2">Adventure starts here 🚀</h4>
          <p className="mb-4">Make your app management easy and fun!</p>

          <div className="mb-3">
            <div className="mb-3">
              <label for="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                //   id="username"
                // name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your username"
                autofocus />

            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" />
            </div>
            <div className="mb-3 form-password-toggle">
              <label className="form-label" for="password">Password</label>
              <div className="input-group input-group-merge">
                <input
                  type="password"
                  // id="password"

                  value={password}
                  onChange={(e) => setPassword(e.target.value)} className="form-control"
                  name="password"

                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  aria-describedby="password" />
                <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
              </div>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                {/* <label className="form-check-label" for="terms-conditions">
                  I agree to
                  <a href="javascript:void(0);">privacy policy & terms</a>
                </label> */}
              </div>
            </div>
            <button className="btn btn-primary d-grid w-100" onClick={() => {

              Registersubmit()
            }}>Sign up</button>
          </div>

          <p className="text-center">
            <span>Already have an account?</span>
            {/* <a href="auth-login-basic.html">
            <span>Sign in instead</span>
          </a> */}
            <Link to="/">
              <span>Sign in insteadt</span>
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Registation
