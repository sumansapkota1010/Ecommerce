import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setReduxCart: (state, action) => {
      state.cartItem = action.payload;
    },
    addToReduxCart: (state, action) => {
      let product = action.payload;
      let oldItem = [...state.cartItem];

      let { _id, name, price } = product;

      let matched = oldItem.find((el) => el._id === _id);

      if (matched) {
        oldItem = oldItem.map((el) => {
          if (el._id === _id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      } else {
        oldItem.push({ _id, name, price, quantity: 1 });
      }
      state.cartItem = oldItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    decrement: (state, action) => {
      let product = action.payload;
      let oldItem = [...state.cartItem];

      oldItem = oldItem = oldItem.map((el) => {
        if (el._id == product._id) {
          return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      });

      oldItem = oldItem.filter((el) => el.quantity > 0);

      state.cartItem = oldItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    increment: (state, action) => {
      let product = action.payload;
      let oldItem = [...state.cartItem];

      oldItem = oldItem = oldItem.map((el) => {
        if (el._id == product._id) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });

      oldItem = oldItem.filter((el) => el.quantity > 0);

      state.cartItem = oldItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const { setReduxCart, addToReduxCart, decrement, increment } =
  cartSlice.actions;

export default cartSlice.reducer;
