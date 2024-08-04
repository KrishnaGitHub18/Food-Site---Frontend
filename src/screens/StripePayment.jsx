import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useCartState, useCartDispatch } from '../components/ContextReducer';

const StripePayment = () => {

    const onToken = (token) => {
        console.log(token)
    }


    let finalOrder = useCartState();
    let finalPrice = finalOrder.reduce( ((total, food) => total + food.price), 0 );
    finalPrice = (finalPrice*100);
        
    return (
        <StripeCheckout
            token={onToken}
            name='FoodWay Checkout'
            currency='USD'
            amount={finalPrice}
            stripeKey="pk_test_51Pk0s7Rr6bgn4LRLhUOx6kodV5YFQiDJqNIcZU8fxtptdS35PXhKuYrWkOFhUwqyTY2ALKQvuggzmV98dzf4FIGW00WEtsI4hL"
        />
    )
}

export default StripePayment
