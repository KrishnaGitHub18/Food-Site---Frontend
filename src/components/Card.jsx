import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useCartState, useCartDispatch} from './ContextReducer';

const Card = (props) => {

    let options = props.foodItemsOptions;
    let priceOptions = Object.keys(options);
    let dispatch = useCartDispatch();
    let finalOrder = useCartState();
    
    // Order Details
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();
    
    //Billing
    let finalPrice = ((quantity)*(parseInt(options[size]))) ;
    useEffect(
        () => {
            setSize(priceRef.current.value)
        }, []
    )

    // const notify = () => toast("Value added to cart");
    const handleAddToCart = async () => {
        
        await dispatch(
            {
                type: "ADD",
                id: props.foodItemProp._id,
                name: props.foodItemProp.name,
                price: finalPrice,
                quantity: quantity,
                size: size
            }
        )

        console.log(finalOrder);
        toast("Value added to cart");;
    } 
    
    return (
        <div>
            <div className="cardmain">

                {/* CONTENT */}
                <div className="cardcontent">
                    <div className="cardname">{props.foodItemProp.name}</div>
                    <div className="carddescription">{props.foodItemProp.description}</div>

                    {/* QUANTITY */}
                    <select className='cardquantity' onChange={(e)=>setQuantity(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>

                    {/* SIZE & PRICE */}
                    <select className='cardsize' onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
                        {
                            priceOptions.map(
                                (data) => {
                                    return(
                                        <option value={data}>{data}</option>
                                    )
                                }
                            )
                        }
                    </select>
                    <div>Value: ${finalPrice}</div>
                </div>

                {/* IMAGE */}
                <div className="cardimage">
                    <img src={props.foodItemProp.img}/> 
                    <button onClick={handleAddToCart} className='submitoverlap'></button>
                    <ToastContainer 
                       position="top-right"
                       autoClose={1500}
                       hideProgressBar={false}
                       newestOnTop={false}
                       closeOnClick
                       rtl={false}
                       draggable
                       pauseOnHover
                       theme="light"
                    />
                </div>

            </div>
        </div>

    );
}

export default Card;



// <div className="card m-3 bg-dark">

// {/* IMAGE */}
// <img src={props.foodItemProp.img} className="card-img-top" alt="..." style={{height: "120px", objectFit: "fill"}}/>

// <div className="card-body">

//     {/* NAME */}
//     <h5 className="card-title">{props.foodItemProp.name}</h5>

//     {/* DESCRIPTION */}
//     <p className="card-text" style={{"fontSize": "12.5px"}}>{props.foodItemProp.description}</p>

//     <div className='container w-100 d-flex flex-row'>

//         {/* QUANTITY */}
//         <select className='m-2 h-100 w-100 bg-success rounded' onChange={(e)=>setQuantity(e.target.value)}>
//             {Array.from(Array(6), (e, i) => {
//                 return (
//                     <option key={i + 1} value={i + 1}> {i + 1} </option>
//                 )
//             })}
//         </select>

//         {/* SIZE & PRICE */}
//         <select className='m-2 h-100 w-100 bg-success rounded' onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
//             {
//                 priceOptions.map(
//                     (data) => {
//                         return(
//                             <option value={data}>{data}</option>
//                         )
//                     }
//                 )
//             }
//         </select>
//     </div>
//     <hr />

//     {/* SUBMIT */}
//     <div className='container d-flex justify-content-start align-items-center fs-5'>Value: ${finalPrice}</div>
//     <button className='h-100 w-100 bg-red rounded' onClick={handleAddToCart}>Add to Cart</button>
    
// </div>
// </div>