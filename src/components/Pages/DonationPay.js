import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import GooglePay from './GooglePay';


const stripePromise = loadStripe('pk_test_51LUZbMIqhxh87CUYWafDCf0kKoPFGP5J92pLT2qSlAf63n8jr9nB5SmI1iAOtqrfHflqMLnw2hMmIROu35XAhDHJ000thawa6w');

const DonationPay = () => {
    return (

        <div className='container mt-5'>
            <br></br>
            <br></br>
            <br></br>
                 
            <br></br>
            <img style={{width:'90%'}} src="https://i.ibb.co/vxRvsVf/333-3335493-follow-us-payment-method-icons-png.png" alt="333-3335493-follow-us-payment-method-icons-png" border="0"></img>
            {/* 
            
            pk_test_51LUZbMIqhxh87CUYWafDCf0kKoPFGP5J92pLT2qSlAf63n8jr9nB5SmI1iAOtqrfHflqMLnw2hMmIROu35XAhDHJ000thawa6w
            
            */}
            <div className='payCard' >
             <Elements stripe={stripePromise}>
            <CheckoutForm/>        
        </Elements>

            </div>
            
 <GooglePay></GooglePay>

        </div>
    );
};

export default DonationPay;