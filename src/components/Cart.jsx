import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItem, incrementItem, decrementItem} from '../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch;
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

            <div className=''>

                {/* Cart Item Section */}
                <div>
                    {cartItems.map(item => (
                        <div key={item.id}>

                            {/* product Image */}
                            <img src={item.image} alt={item.name} className='w-32 h-32 object-cover bg-black opacity-90' />

                            {/* Product Details */}
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.price.toLocaleString()}</p>

                                <div>

                                    {/* Quantity Controls */}
                                    <div>
                                        <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
                                    </div>

                                    {/* Remove Button */}
                                    <button onClick={() => dispatch(removeItem(item.id))}>
                                        Remove
                                    </button>

                                </div>
                            </div>

                            {/* Item Total Price */}
                            <div className='text-right w-full borter-t border-[#222]' >
                                <p>${(item.price * item.quantity)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary (Checkout Box) */}

            </div>

        </div>
    </div>
  )
}

export default Cart