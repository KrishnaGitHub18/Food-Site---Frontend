import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {

    const [credentials, setCredentials] = useState(
        {
            name:"",
            email:"",
            password:"",
            geolocation:""   
        }
    )
    const handleSubmit = async(e) => {
        e.preventDefault();
        // const response = await fetch('http://localhost:5000/api/register',{
        const response = await fetch('https://food-site-backend-nine.vercel.app/api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: credentials.name,
                    password: credentials.password,
                    location: credentials.geolocation,
                    email: credentials.email
                }
            )
        })
        const dataValidity = await response.json();
        console.log(dataValidity);
        if (!dataValidity.success){
            alert("Please enter valid credentials.");
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
        <div className='container'>
            <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={credentials.name}
                        id="exampleInputName1"
                        onChange={changes}
                    />
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name='email'
                        value={credentials.email}
                        onChange={changes}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>

                {/* PASSWORD */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name='password'
                        value={credentials.password}
                        onChange={changes}
                    />
                </div>
                
                {/* ADRESS */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Adress
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword"
                        name='geolocation'
                        value={credentials.geolocation}
                        onChange={changes}
                    />
                </div>

                {/* <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div> */}

                <button type="submit" className="m-3 btn btn-success">
                    Submit
                </button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
            </form>
        </div>
    )
}

export default Signup
