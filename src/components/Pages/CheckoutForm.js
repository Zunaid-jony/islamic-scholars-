import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';


const CheckoutForm = () => {
    const stripe = useStripe()
    const elemant = useElements()
    const handleSubmit= async (event) =>{

        event.preventDefault();

        

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                style:{ 
                    base:{
                        fontSize: '16px',
                        marginTop: '10px',
                        
                        color:'black',
                        '::placeholder':{
                            color: 'black',

                        },

                    },
                    invalid:{
                        color:'#9e2146',
                    },
                },
            }}
            
            ></CardElement>
            <button style={{width:'100%',marginRight: '20px'}} class="btn btn-primary" type='submit' disabled={!stripe}>
                pay

            </button>

        </form>
    );
};

export default CheckoutForm;