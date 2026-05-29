import React from 'react'
import {useSelector} from 'react-redux';

const Navbar = () => {
    //Read totalQuantity from out redux store
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
        <nav className='fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#d4af37]/20 z-50'>
            <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>

                {/* Brand logo */}
                <div className='text-2xl font-serif text-white uppercase tracking-widest cursor-pointer'>Chrono<span className='text-[#d4af37]'>Lux</span>

                </div>
                {/* Navigation & Cart icon */}
                <div className='flex items-center gap-8'>
                    <span className='text-sm tracking-[0.2em] uppercase text-gray-400 hover:text-[#d4af37] cursor-pointer transition-colors'>Collection</span>
                    
                    {/* Cart Icon in top right */}
                    <div className='relative cursor-pointer group flex items-center'>
                        <svg 
                        xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" 
                        className="h-6 w-6 text-gray-300 group-hover:text-[#d4af37] transition-colors" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>


                        {/* Dynamic Badge: Only shows if items are in cart */}
                        {totalQuantity > 0 && (
                            <span className='absolute -top-2 -right-2 bg-[#d4af37] text-black text-[10px]
                            font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse border border-black'>
                                {totalQuantity}</span>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar