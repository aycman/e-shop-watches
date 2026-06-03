import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //1. add item to cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image, // Ensure image is saved
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },

    //2. Remove entire item from cart
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= (existingItem.price * existingItem.quantity);
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    //3. Increment qiantity by 1
    incrementItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }
    },

    //4. Decrement quantity by 1
    decrementItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
    
      if (existingItem) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;

        //Remove item if quantity is 0
        if(existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    }
  }
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
