import React from 'react';
import { useCartState, useCartDispatch } from '../components/ContextReducer';
import trash from '../Images/trash.svg';
import emptyCart from '../Images/emptyCart1.svg';
import '../css/Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {

    let finalOrder = useCartState();
    let dispatch = useCartDispatch();
    let finalPrice = finalOrder.reduce( ((total, food) => total + food.price), 0 );

    if (!finalOrder.length){
        return(
            <div className='parent-div'>
                <img className='image' src={emptyCart}/>
                <h2>Your cart is currently empty</h2>
                <div className='text2'>Craving something delicious? Hit the button below and let FoodWay serve you a feast of irresistible flavors!</div>
                <Link to='/' className='button'>Back to shop</Link>
            </div>
        )
    }

    console.log(finalOrder);

    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'> 
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>NAME</th>
                            <th scope='col'>QUANTITY</th>
                            <th scope='col'>OPTION</th>
                            <th scope='col'>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            finalOrder.map(
                                (food, index) => {
                                    return(
                                        <tr>
                                            <th scope='row'>{ index+1 }</th>
                                            <td>{ food.name }</td>
                                            <td>{ food.quantity }</td>
                                            <td>{ food.size }</td>
                                            <td>{ food.price }</td>
                                            <td>
                                                <button className="trash-button">
                                                    <img className="trash-icon" src={trash} alt="DELETE" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
                <div>
                    <h1 className='fs-2'>Final Price: ${finalPrice}/-</h1>
                </div>
                <div>
                    <button className='btn bg-success mt-5'>
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
