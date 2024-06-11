import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {
    return (
        <div>
            <h2 className="text-3xl py-2 mt-4 text-center font-bold uppercase text-[#5BBF96]">Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;