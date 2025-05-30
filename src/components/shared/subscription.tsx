'use client';
import React, { useState } from 'react';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
    };

    return (
        <div className='bg-orange-500 py-16 px-4 rounded-md my-8'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='text-white space-y-2'>
                    <h2 className='text-3xl font-bold'>Subscribe to Our Newsletter</h2>
                    <p className='text-orange-100'>Stay updated with our latest news and special offers</p>
                </div>
                
                <form onSubmit={handleSubmit} className='w-full md:w-auto flex flex-col sm:flex-row gap-4'>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className='px-6 py-3 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-orange-300'
                        required
                    />
                    <button 
                        type="submit"
                        className='bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold 
                                 hover:bg-orange-100 transition duration-300 whitespace-nowrap'
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscription;