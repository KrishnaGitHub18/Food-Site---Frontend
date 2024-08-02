import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useCartState, useCartDispatch } from '../components/ContextReducer';
import '../css/Navbar.css'

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }
    const handleLogin = () => {
        navigate("/login")
    }
    let finalOrderData = useCartState();

    return (

        <div>
            <div className='navbarmain'>
                <div className='navImg'></div>


                {/* DYNAMIC NAV BUTTONS */}
                <div className='dyn-nav'>
                    {
                        (localStorage.getItem('authToken'))
                            ?   <div className='navbtn'>
                                    <div className='buttons'>
                                        <button className='prs'>Home</button>
                                        <button className='abs'>Browse Menu</button>
                                        <button className='abs'>Special Offer</button>
                                        <Link to='/Cart' className='mycartabs'>
                                            <button className='abs1'>
                                                My Cart
                                            </button>
                                        </Link>
                                        <button className='abs'>Track Orders</button>
                                    </div>
                                    <div className='lgout'>
                                        <button className='lgoutbtn' onClick={handleLogout}>
                                            <div className='lgoutprofile'></div>
                                            <div className='lgouttxt'>logout</div>
                                        </button>
                                    </div>
                                </div>
                            :   <div className="navbtn"> 
                                    <div className='lgout'>
                                        <button className='lgoutbtn' onClick={handleLogin}>
                                            <div className='lgoutprofile'></div>
                                            <div className='lgouttxt' >Login/Signup</div>
                                        </button>
                                    </div>
                                </div>
                    }
                </div>

            </div>
        </div>



        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        //         <div className="container-fluid">
        //             <Link className="navbar-brand fs-1 fst-italic" to="/">FoodWay</Link>
        //             <button
        //                 className="navbar-toggler"
        //                 type="button"
        //                 data-bs-toggle="collapse"
        //                 data-bs-target="#navbarNav"
        //                 aria-controls="navbarNav"
        //                 aria-expanded="false"
        //                 aria-label="Toggle navigation"
        //             >
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 {
        //                     (localStorage.getItem('authToken'))
        //                         ? <div className="d-flex ms-auto">
        //                             <Link to='/Cart' className='button-33 mx-2'>
        //                                 {
        //                                     (finalOrderData.length)
        //                                         ?   <Badge pill bg='danger'>{ finalOrderData.length }</Badge>
        //                                         :   ""
        //                                 }
        //                                 🛒
        //                             </Link>
        //                             <button className="button-33 mx-2" onClick={handleLogout}>⚙️</button>
        //                         </div>
        //                         : <div className="d-flex ms-auto">
        //                             <Link className="button-33 mx-2" to="/login" role="button">Login</Link>
        //                             <Link className="button-33" to="/signup" role="button">Signup</Link>
        //                         </div>
        //                 }
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
}

export default Navbar;
