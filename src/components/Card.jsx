import React, { useEffect, useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {useCartState, useCartDispatch} from './ContextReducer';
import{ message } from "antd";


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
        message.success("Value added to cart");
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
                    <div className='val'>Value: ₹{finalPrice}</div>
                </div>

                {/* IMAGE */}
                <div className="cardimage">
                    <img src={props.foodItemProp.img}/> 
                    <button onClick={handleAddToCart} className='submitoverlap'></button> 
                </div>

            </div>
        </div>

    );
}

export default Card;

