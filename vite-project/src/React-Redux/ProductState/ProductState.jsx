import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  user: [],
  addcart: [],
  signout: "",
  history: [],
  Qty: 0,
  total: 0
};

const productState = createSlice({
  name: "Product",
  initialState,
  reducers: {
    alProduct: (state, { payload }) => {
      state.products = payload;
      console.log("allData", payload);
    },

    userData: (state, { payload }) => {
      state.user = payload;
    },

    signOut: (state) => {
      state.user = null;
    },


    
    // CartPlus: (state, { payload }) => {
    //   const existingProduct = state.addcart.find((product) => product.id === payload.id);

    //   if (existingProduct) {
    //     existingProduct.Qty += 1;
    //   } else {
    //     const newProduct = { ...payload, Qty: 1 };
    //     state.addcart.push(newProduct);
    //   }

    // },

    CartPlus: (state, { payload }) => {
      const check = state.addcart.findIndex((e) => e.id === payload.id);
      if (check >= 0) {
        state.addcart[check].Qty += 1;
        // state.total = addTotal(state.addcart);
      } 
      
      else {
        const addValue = {
          ...payload,
          Qty: 1,
        };
        state.addcart.push(addValue);
      }
    },

    

    CartMinus: (state, { payload }) => {
      console.log('check', payload);
      const checkCart = state.addcart.findIndex((el) => el.id === payload.id);
      
      // if (checkCart >= 0) {
        // const check = state.addcart[checkCart].QTY;
        
        if (checkCart >= 0) {
          state.addcart[checkCart].Qty -= 1;
        } else if (checkCart === 1) {
          const remove = state.addcart.filter((el) => el.id !== payload.id);
          state.addcart = remove;
        }
      // }
    },
    

    removeCart: (state, {payload})=> {
        state.addcart = state.addcart.filter((fl) => fl.id !== payload.id);
        console.log(payload)
    },



  //   total: (state, {payload})=>{
  //     let amount = 0;
  //     let total = 0;
  //     console.log(payload);
  //     state.addcart.forEach((item) => {
  //         amount += item.Qty;
  //         total += (item.Qty * item.price) * 100 ;
  //     });
  //     state.amount = amount;
  //     state.total = (Math.floor(total))/100;
  // },



  },
});

export const { alProduct, userData, signOut, CartPlus, removeCart, total, CartMinus} =
  productState.actions;
export default productState.reducer;
