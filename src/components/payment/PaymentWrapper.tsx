"use client"
import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentCheckout from './PaymentCheckout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const PaymentWrapper = ({orderId}:{orderId: string}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCheckout orderId ={orderId}/>
        </Elements>
    );
};

export default PaymentWrapper;