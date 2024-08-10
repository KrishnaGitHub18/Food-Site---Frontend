import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import '../css/Signup.css';

const Signup = () => {

    //Navigation
    let navigate = useNavigate();

    //use state for loader
    const [loading, setLoading] = useState(false);


    const [credentials, setCredentials] = useState(
        {
            name: "",
            email: "",
            password: "",
            geolocation: ""
        }
    )
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Start loading
        setLoading(true); 

        // const response = await fetch('http://localhost:5000/api/register', {
            const response = await fetch('https://food-way-backend.vercel.app/api/register', {
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

        //stop loading
        setLoading(false);

        const dataValidity = await response.json();
        console.log(dataValidity);
        if (!dataValidity.success) {
            alert("Please enter valid credentials.");
        }
        else {
            localStorage.setItem("authToken", dataValidity.authToken);
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

        <>
            {
                loading
                    ?   <ThreeDots 
                            visible={true}
                            height="80"
                            width="80"
                            color="#FC8A06"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass="loader-container"
                        />
                    :   <div className='main-div'>
                            <div className='background'>
                
                                {/* LOGIN/SIGNUP */}
                                <div className="top">
                                    <div className='login-signup'>
                                        <div className='SPloginbutton'><Link to="/Login" className='SPloginbutton1'>Login</Link></div>
                                        <div className='SPsignupbutton'><Link to="/signup" className='SPsignupbutton1'>Signup</Link></div>
                                    </div>
                                </div>
                
                                {/* FORM & TEXT */}
                                <div className='formtext'>
                
                                    {/* FORM */}
                                    <div className='form-box'>
                                        <form onSubmit={handleSubmit}>
                
                                            {/* NAME */}
                                            <div className="mb-2">
                                                <label htmlFor="name" className="form-label">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name='name'
                                                    value={credentials.name}
                                                    onChange={changes}
                                                />
                                            </div>
                
                                            {/* EMAIL */}
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name='email'
                                                    value={credentials.email}
                                                    onChange={changes}
                                                />
                                            </div>
                
                                            {/* PASSWORD */}
                                            <div className="mb-2">
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
                                            <div className="mb-2">
                                                <label htmlFor="exampleInputPassword1" className="form-label">
                                                    Adress
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    name='geolocation'
                                                    value={credentials.geolocation}
                                                    onChange={changes}
                                                />
                                            </div>
                
                                            {/* CHECKBOX */}
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
                
                                            {/* SUBMIT */}
                                            <button type="submit" className="btn btn-success">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                
                                    <div className='texts'>
                                        <div className='texta1'>FoodWay</div>
                                        <div className='texta2'>Signup Page</div>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </>

    )
}

export default Signup
