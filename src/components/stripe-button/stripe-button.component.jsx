import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_gLJ2EAVutsdgTBO5uZuNxPuA00Aj1R0DRs';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="app Clothing"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            toke={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckButton;