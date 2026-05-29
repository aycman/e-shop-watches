import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../redux/cartSlice';
import {WATCHES} from '../data/products';

/*  
    ProductList.jsx:
    Fetches products and categories from local data to display them in a responsive, nested grid.
    Connects to Redux to track which watches are already added to the shopping cart.
*/

const ProductList = () => {
  const dispatch = useDispatch();

  //Get cart items to check if a product is already added
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto bg-[#0a0a0a] text-white'>
      
      {/* Page Title */}
      <div className='text-center mb-20'>
        <h1 className='text-4xl font-serif tracking-[0.2em] uppercase mb-6 text-[#d4af37]'>
          Exceptional Timepieces
        </h1>
        <div className='h-px w-24 bg-gray-800 mx-auto'>
        </div>
      </div>

      {/* Render Products using the nested array structure */}
      {WATCHES.map((categoryObj) => (
        <div key={categoryObj.category} className='mb-24'>
          <h2 className='text-xl md:text-2xl tracking-[0.3em] text-gray-400
          uppercase mb-10 border-l-2 border-[#d4af37] pl-6 font-light'>
            {categoryObj.category}
          </h2>

          <div className='grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
            {/* Map through the watches array inside each category */}
            {categoryObj.watches.map((watch) => {
              
              //check if the current watch is already in the Redux store
              const inCart = cartItems.some(item => item.id === watch.id);

              return (
                <div key={watch.id} className='group flex flex-col bg-[#111111] 
                rounded-sm overflow-hidden border border-[#222] hover:border-[#d4af37]/50 
                transition-colors duration-500'>

                  {/* image */}
                  <div className='relative aspect-[4/5] overflow-hidden bg-black'>
                    <img 
                      src={watch.image}
                      alt={watch.name}
                      className='w-full h-full object-cover opacity-80 group-hover:opacity-100
                      group-hover:scale-110 transition-all duration-1000 ease-out '
                      />
                  </div>

                  {/* Product info */}
                  <div className='p-8 flex flex-col flex-grow text-center'>
                    <h3 className='text-xl font-serif tracking-[0.1em] mb-2 text-white'>
                      {watch.name}
                    </h3>
                    <p className='text-gray-500 text-sm mb-8 font-light leading-relaxed'>
                      {watch.description}
                    </p>

                    <div className='mt-auto'>
                      <p className='text-[#d4af37] font-medium text-lg tracking-wider mb-6'>
                        ${watch.price.toLocaleString()}
                      </p>

                      {/* Add to cart button */}
                      <button
                        onClick={() => dispatch (addItem(watch))}
                        disabled={inCart}
                        className={`w-full py-4 text-xs uppercase tracking-[0.2em]
                          font-bold transition-all duration-300
                          ${inCart 
                            ? 'bg-[#1a1a1a] text-gray-600 border border-[#333] cursor-not-allowed' 
                            : 'bg-transparent text-[#d4af37] border border-[#dfaf37] hover:bg-[#d4af37] hover:text-black'
                            } `}
                      >
                        {inCart ? 'In Bag' : 'Add to Bag'}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList

















// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {addItem} from '../redux/cartSlice';
// import {WATCHES} from '../data/products';

// /*  
//     ProductList.jsx:
//     Fetches products and categories from local data to display them in a responsive, nested grid.
//     Connects to Redux to track which watches are already added to the shopping cart.
// */

// const ProductList = () => {
//   const dispatch = useDispatch();

//   //Get cart items to check if a product is already added
//   const cartItems = useSelector((state) => state.cart.items);

//   return (
//     <div>
      
//       {/* Page Title */}
//       <div>
//         <h1>
//           Exceptional Timepieces
//         </h1>
//         <div></div>
//       </div>

//       {/* Render Products using the nested array structure */}
//       {WATCHES.map((categoryObj) => (
//         <div key={categoryObj.category} className='mb-24'>
//           <h2>
//             {categoryObj.category}
//           </h2>

//           <div>
//             {/* Map through the watches array inside each category */}
//             {categoryObj.watches.map((watch) => {
              
//               //check if the current watch is already in the Redux store
//               const inCart = cartItems.some(item => item.id === watch.id);

//               return (
//                 <div key={watch.id}>

//                   {/* image */}
//                   <div>
//                     <img 
//                       src={watch.image}
//                       alt={watch.name}
                      
//                       />
//                   </div>

//                   {/* Product info */}
//                   <div>
//                     <h3>
//                       {watch.name}
//                     </h3>
//                     <p>
//                       {watch.description}
//                     </p>

//                     <div>
//                       <p>
//                         ${watch.price.toLocaleString()}
//                       </p>

//                       {/* Add to cart button */}
//                       <button
//                         onClick={() => dispatch (addItem(watch))}
//                         disabled={inCart}
//                         className={`w-full 
                          
//                           ${inCart 
//                             ? 'bg-[#1a1a1a]' 
//                             : 'bg-transparent'
                           
//                             } `}
//                       >
//                         {inCart ? 'In Bag' : 'Add to Bag'}
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList