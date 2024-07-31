import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useCartState, useCartDispatch } from '../components/ContextReducer';

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }
    let finalOrderData = useCartState();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodWay</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active fs-6" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul> */}
                        {
                            (localStorage.getItem('authToken'))
                                ? <div className="d-flex ms-auto">
                                    <Link to='/Cart' className='button-33 mx-2'>
                                        {
                                            (finalOrderData.length)
                                                ?   <Badge pill bg='danger'>{ finalOrderData.length }</Badge>
                                                :   ""
                                        }
                                        🛒
                                    </Link>
                                    <button className="button-33 mx-2" onClick={handleLogout}>⚙️</button>
                                </div>
                                : <div className="d-flex ms-auto">
                                    <Link className="button-33 mx-2" to="/login" role="button">Login</Link>
                                    <Link className="button-33" to="/signup" role="button">Signup</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
