'use client';
import CarIcon from '@/assets/svg/car';
import { DollarSign, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'BD', name: 'Bangla' },
  { code: 'ES', name: 'Spanish' },
  { code: 'FR', name: 'French' }
];

const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' }
];

const Topmenubar = () => {
    const [showLanguages, setShowLanguages] = useState(false);
    const [showCurrencies, setShowCurrencies] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    return (
        <div className='relative bg-[#101940] mx-auto w-full text-white px-4 py-2'>
            <div className='flex justify-between gap-4 items-center mx-auto max-w-7xl'>
            <div className='flex gap-4 items-center'>
                <CarIcon stroke='white'/>
                <p>Track Your Order</p>
            </div>
            <div className='flex gap-6 items-center z-40'>
                <div className='relative'>
                    <button 
                        className='flex items-center gap-2 hover:opacity-80'
                        onClick={() => setShowCurrencies(!showCurrencies)}
                    >
                        <DollarSign size={16} />
                        <span>{selectedCurrency.code}</span>
                        <ChevronDown size={16} />
                    </button>
                    {showCurrencies && (
                        <div className='absolute top-full right-0 mt-2 bg-white text-gray-800 rounded shadow-lg'>
                            {currencies.map((currency) => (
                                <button
                                    key={currency.code}
                                    className='block w-full px-4 py-2 text-left hover:bg-gray-100'
                                    onClick={() => {
                                        setSelectedCurrency(currency);
                                        setShowCurrencies(false);
                                    }}
                                >
                                    {currency.symbol} {currency.code}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className='relative '>
                    <button 
                        className='flex items-center gap-2 hover:opacity-80'
                        onClick={() => setShowLanguages(!showLanguages)}
                    >
                        <span>{selectedLang.code}</span>
                        <ChevronDown size={16} />
                    </button>
                    {showLanguages && (
                        <div className='absolute top-full right-0 mt-2 bg-white text-gray-800 rounded shadow-lg '>
                            {languages.map((language) => (
                                <button
                                    key={language.code}
                                    className='block w-full px-4 py-2 text-left hover:bg-gray-100'
                                    onClick={() => {
                                        setSelectedLang(language);
                                        setShowLanguages(false);
                                    }}
                                >
                                    {language.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Topmenubar;