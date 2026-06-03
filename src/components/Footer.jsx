import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#050505] border-t border-[#222] pt-20 pb-10 text-white font-sans mt-auto'>
        <div className='max-w-7x1 mx-auto px-6'>

            {/* Main Footer Content */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 '>

                {/* Column 1: Brand Info */}
                <div>
                <h2 className='text-3xl fontserif uppercase tracking-widest mb-6'>
                    Chrono<span className='text-[#d4af37]'>Lux</span>
                </h2>
                <p className='text-gray-500 font-light leading-relaxed text-sm pr-4'>
                    Curators of the world's most exceptional timepieces. Precision, elegance, and timeless luxury crafted for eternity.
                </p>
                </div>

            {/* Column 2: Quick Links */}
                <div>
                    <h3 className='text-sm font-serif uppercase tracking-[0.2em] mb-6 text-[#d4af37]'>
                        Explore
                    </h3>
                    <ul className='space-y-4 text-sm text-gray-400 font-light tracking-wide'>
                        <li>
                            <Link to="/" className='hover:text-white hover:translate-x-1 inline-block transition-all duration-300'>
                                Our Boutique
                            </Link>
                        </li>
                        <li>
                            <span className='hover:text-white cursor-pointer transition-colors duration-300'>
                                Private Appointments
                            </span>
                        </li>
                        <li>
                            <span className='hover:text-white cursor-pointer transition-colors duration-300'>
                                Watch Care & Service
                            </span>
                        </li>
                    </ul>
                </div>

            {/* Column 3: Newsletter */}
                <div>
                    <h3 className='text-sm font-serif uppercase tracking-[0.2em] mb-6 text-[#d4af37]'>
                        Insider Access
                    </h3>
                    <p className='text-gray-500 font-light text-sm mb-6'>
                        Subscribe to receive exclusive updates on rare acquisitions and private events.
                    </p>
                    <form className="flex border border-[#333] focus-within:border-[#d4af37] transition-colors duration-300">
                        <input 
                            type='email'
                            placeholder='Email Address'
                            className='bg-transparent w-full px-4 py-3 text-sm focus:outline-none text-white placeholder-gray-600 font-light'
                        />
                        <button
                            type='button'
                            className='bg-[#d4af37] text-black px-6 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300'
                        >Join</button>
                    </form>
                </div>

            </div>

            {/* Copyright Section */}
            <div className='border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>

                <p className='text-[10px] sm:text-xs text-gray-600 uppercase tracking-[0.15em] font-light text-center md:text-left'>
                    &copy; {currentYear} ChronoLux Boutique. All Rights Reserved.
                </p>

                <div className='flex gap-8 text-[10px] sm:text-xs text-gray-600 uppercase tracking-[0.15em] font-light'>
                    <span className='hover:text-[#d4af37] cursor-pointer transition-colors'>Privacy Policy</span>
                    <span className='hover:text-[#d4af37] cursor-pointer transition-colors'>Terms of Service</span>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer