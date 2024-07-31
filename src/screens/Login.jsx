import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css/Login.css'

const Login = () => {

  //Navigation
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState(
    {
      email: "",
      password: ""
    }
  )
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      // const response = await fetch('https://food-site-backend-nine.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          password: credentials.password,
          email: credentials.email
        }
      )
    })
    const dataValidity = await response.json();
    console.log(dataValidity);
    if (!dataValidity.success) {
      alert("Please enter valid credentials.");
    }
    else {
      localStorage.setItem("authToken", dataValidity.authToken);
      console.log(localStorage.authToken);
      navigate("/");
    }
  }

  //onChange function
  const changes = (e) => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    )
  }

  return (
    <div className='main-div'>
      <div className='background'>

        {/* LOGIN/SIGNUP */}
        <div className="top">
          <div className='login-signup'>
            <div className='loginbutton'><Link className='loginbutton1' to="/Login">Login</Link></div>
            <div className='signupbutton'><Link to="/signup" className='signupbutton1'>Signup</Link></div>
          </div>
        </div>

        {/* FORM & TEXT */}
        <div className='formtext'>

          {/* FORM */}
          <div className='form-box'>
            <form onSubmit={handleSubmit}>
              
              {/* EMAIL */}
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name='email'
                value={credentials.email}
                onChange={changes}
              />

              {/* PASSWORD */}
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="exampleInputPassword1"
                name='password'
                value={credentials.password}
                onChange={changes}
              />

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Agreed T&C  
                </label>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>

            </form>
          </div>

          <div className='texts'>
            <div className='texta1'>FoodWay</div>
            <div className='texta2'>Login Page</div>
          </div>
        </div>
      </div>
    </div>
  )

  //   return (
  //     <div>
  //       <div className='container'>
  //         <form onSubmit={handleSubmit}>

  //           {/* EMAIL */}
  //           <div className="mb-3">
  //             <label htmlFor="exampleInputEmail1" className="form-label">
  //               Email address
  //             </label>
  //             <input
  //               type="email"
  //               className="form-control"
  //               id="exampleInputEmail1"
  //               aria-describedby="emailHelp"
  //               name='email'
  //               value={credentials.email}
  //               onChange={changes}
  //             />
  //             <div id="emailHelp" className="form-text">
  //               We'll never share your email with anyone else.
  //             </div>
  //           </div>

  //           {/* PASSWORD */}
  //           <div className="mb-3">
  //             <label htmlFor="exampleInputPassword1" className="form-label">
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="exampleInputPassword1"
  //               name='password'
  //               value={credentials.password}
  //               onChange={changes}
  //             />
  //           </div>

  //           {/* <div className="mb-3 form-check">
  //             <input
  //               type="checkbox"
  //               className="form-check-input"
  //               id="exampleCheck1"
  //             />
  //             <label className="form-check-label" htmlFor="exampleCheck1">
  //               Check me out
  //             </label>
  //           </div> */}

            // <button type="submit" className="m-3 btn btn-success">
            //   Submit
            // </button>
  //           <Link to="/signup" className='m-3 btn btn-danger'>Signup</Link>
  //         </form>
  //       </div>
  //     </div>
  //   );
}

export default Login;
