import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nMFfgJnk7YeqLFJcm09vQcYv00Dus1W3bT';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }


    return (
        <StripeCheckout
        currency='GBP'
        label='Pay Now'
        name='Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
