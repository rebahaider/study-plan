import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('Payment Error',error);
            setError(error.message)
        }
        else{
            console.log('Payment method',paymentMethod);
            setError('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-accent mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-600 font-bold">{error}</p>
        </form>
    );
};

export default CheckoutForm;