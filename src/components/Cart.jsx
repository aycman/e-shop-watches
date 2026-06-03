import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItem, incrementItem, decrementItem} from '../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const [checkoutStatus, setCheckoutStatus] = useState(false);

    const handleCheckout = () => {
        setCheckoutStatus(true);
        setTimeout(() => setCheckoutStatus(false), 3000); //Reset after 3 seconds
    };

    // Render Empty Cart State 
    if (cartItems.length === 0) {
        return(
            <div className='min-h-screen pt-40 flex flex-col items-center bg-[#0a0a0a] px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#333] mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h2 className='text-3xl font-serif text-white tracking-[0.2em] uppercase mb-6'>Your Bag is Empty</h2>
                <p className='text-gray-500 max-w-md mb-10 font-light leading-relaxed'>It looks like you haven't made your choice yet. Explore our exclusive collections to find your perfect timepiece.</p>
                <Link to="/" className='border border-[#d4af37] text-[#d4af37] px-8 py-4 uppercase tracking-[0.15em] hover:bg-[#d4af37] hover:text-black transition-all duration-300'>
                    Return to Boutique
                </Link>
            </div>
        );
    }

  // Render Populated Cart  
  return (
    <div className='min-h-screen pt-32 pb-20 px-6 bg-[#0a0a0a] text-white'>
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl font-serif tracking-[0.2em] uppercase mb-12 border-b border-[#333] pb-6 text-[#d4af37]'>
                Shopping Bag
            </h1>

            <div className='flex flex-col lg:flex-row gap-12'>

                {/* Cart Item Section */}
                <div className='flex-1 space-y-6'>
                    {cartItems.map(item => (
                        <div key={item.id} className='flex flex-col sm:flex-row gap-8 items-center bg-[#111] p-6 border border-[#222] shadow-lg relative'>

                            {/* product Image */}
                            <img src={item.image} alt={item.name} className='w-32 h-32 object-cover rounded-l bg-black opacity-90' />

                            {/* Product Details */}
                            <div className='flex-1 w-full text-center sm:text-left'>
                                <h3 className='text-xl font-serif tracking-[0.1em] mb-2'>{item.name}</h3>
                                <p className='text-[#d4af37] mb-6 tracking-wider'>{item.price.toLocaleString()}</p>

                                <div className='flex item-center justify-center sm:justify-start gap-6'>

                                    {/* Quantity Controls */}
                                    <div className='flex items-center border border-[#333] bg-[#0a0a0a]'>
                                        <button onClick={() => dispatch(decrementItem(item.id))} className='px-4 py-2 text-gray-400 hover:text-white transition-colors'>-</button>
                                        <span className='px-4 text-sm font-medium border-l border-r border-[#333]'>{item.quantity}</span>
                                        <button onClick={() => dispatch(incrementItem(item.id))} className='px-4 py-2 text-gray-400 hover:text-white transition-colors'>+</button>
                                    </div>

                                    {/* Remove Button */}
                                    <button onClick={() => dispatch(removeItem(item.id))} className='text-xs text-red-500/70 uppercase tracking-widest hover:text-red-500 transition-colors'>
                                        Remove
                                    </button>

                                </div>
                            </div>

                            {/* Item Total Price */}
                            <div className='text-right w-full sm:w-auto mt-4 sm:mt-0 borter-t border-[#222] sm:border-t-0 pt-4 sm:pt-0' >
                                <p className='text-lg font-light tracking-wider'>${(item.price * item.quantity).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary (Checkout Box) */}
                <div className='w-full lg:w-96'>
                    <div className='bg-[#111] p-8 border border-[#222] sticky top-32'>
                        <h2 className='text-xl font-serif tracking-[0.2em] uppercase mb-8 border-b border-[#333] pb-4'>Order Summary</h2>

                        <div className='flex justify-between mb-4 text-gray-400 font-light tracking-wide'>
                            <span>Subtotal</span>
                            <span>${totalAmount.toLocaleString()}</span>
                        </div>
                        <div className='flex justify-between mb-8 text-gray-400 font-light tracking-wide'>
                            <span>Shipping</span>
                            <span className='text-[#d4af37]'>Complimentary</span>
                        </div>

                        <div className='flex justify-between items-center mb-10 pt-6 border-t border-[#333]'>
                            <span className='text-lg uppercase tracking-widest font-light'>Total</span>
                            <span className='text-2xl text-[#d4af37] font-medium tracking-wider'>${totalAmount.toLocaleString()}</span>
                        </div>

                        {checkoutStatus ? (
                            <div className='bg-green-900/20 border border-green-700/50 text-green-500 p-4 text-center text-sm tracking-widest uppercase'>
                                Order Placed Successfully
                            </div>
                        ) : (
                            <button onClick={handleCheckout}
                                className='w-full font-bold py-4 uppercase tracking-[0.2em] text-sm bg-[#d4af37] text-black hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0,2)]'
                                >
                                Secure Checkout
                            </button>
                        )}

                        <Link to="/" className='block w-full text-center mt-4 border border-[#333] text-gray-400 py-4 uppercase tracking-[0.2em] text-xs hover:text-white transition-colors'>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cart