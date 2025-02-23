import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-[#101940] text-gray-300'>
            {/* Main Footer Content */}
            <div className='max-w-7xl mx-auto py-16 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <h3 className='text-white text-xl font-bold mb-4'>NordCom</h3>
                        <p className='text-sm'>Your trusted destination for quality products and exceptional service.</p>
                        <div className='flex space-x-4'>
                            <Link href="#" className='hover:text-white transition-colors'>
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className='hover:text-white transition-colors'>
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className='hover:text-white transition-colors'>
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className='hover:text-white transition-colors'>
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-white text-lg font-semibold mb-4'>Quick Links</h4>
                        <ul className='space-y-2'>
                            <li><Link href="/about" className='hover:text-white transition-colors'>About Us</Link></li>
                            <li><Link href="/contact" className='hover:text-white transition-colors'>Contact</Link></li>
                            <li><Link href="/blog" className='hover:text-white transition-colors'>Blog</Link></li>
                            <li><Link href="/faq" className='hover:text-white transition-colors'>FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className='text-white text-lg font-semibold mb-4'>Customer Service</h4>
                        <ul className='space-y-2'>
                            <li><Link href="/shipping" className='hover:text-white transition-colors'>Shipping Info</Link></li>
                            <li><Link href="/returns" className='hover:text-white transition-colors'>Returns</Link></li>
                            <li><Link href="/ordering" className='hover:text-white transition-colors'>How to Order</Link></li>
                            <li><Link href="/track-order" className='hover:text-white transition-colors'>Track Order</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-white text-lg font-semibold mb-4'>Contact Us</h4>
                        <div className='space-y-2'>
                            <p>123 Commerce St.</p>
                            <p>City, State 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: info@nordcom.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-gray-800'>
                <div className='max-w-7xl mx-auto px-4 py-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-sm'>&copy; {new Date().getFullYear()} NordCom. All rights reserved.</p>
                        <div className='flex space-x-4 mt-4 md:mt-0'>
                            <Link href="/privacy" className='text-sm hover:text-white transition-colors'>Privacy Policy</Link>
                            <Link href="/terms" className='text-sm hover:text-white transition-colors'>Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;