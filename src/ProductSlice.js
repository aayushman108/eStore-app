import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCT_URL= "https://fakestoreapi.com/products";

export const fetchProducts= createAsyncThunk('products/fetchProducts', async()=>{
    try{
        const response= await axios.get(PRODUCT_URL);
        return response.data;
    }catch(error){
        return error.message;
    }
})

const initialState= {
    products: {
        allProducts: [],
        cart: [],
        wishlist: []
    },
    status: "idle",
    error: null
};

const ProductSlice= createSlice({
    name: "products",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const product= action.payload;
            const checkProduct= state.products.cart.find(item=> item.id===product.id);
            if(checkProduct){
                checkProduct.quantity= product.quantity;
            }else if(product.quantity>=1){
                state.products.cart.push(product);
            }
        },
        removeFromCart: (state, action)=>{
            const productId= action.payload;
            state.products.cart=state.products.cart.filter(product=>product.id!==productId);
        },
        addToWishlist: (state, action)=>{
            const product= action.payload;
            const checkProduct= state.products.wishlist.find(item=> item.id===product.id);
            if(!checkProduct){
                state.products.wishlist.push(product);
            }
        },
        removeFromWishlist: (state, action)=>{}
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state, action)=>{
            state.status= "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status= "succeeded";
            state.products.allProducts= action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status= "failed";
            state.error= action.error.message;
        })
    }
});

export const selectAllProducts= (state)=> state.products.products.allProducts;
export const selectAllProductsFromCart= (state)=> state.products.products.cart;
export const selectAllProductsFromWishlist= (state)=> state.products.products.wishlist;
export const getProductsStatus= (state)=> state.products.status;
export const getProductsError= (state)=> state.products.error;

export const selectProductById = (state, productId)=> state.products.products.allProducts.find(product=> product.id===productId);

export const {addToCart, addToWishlist, removeFromCart, removeFromWishlist} = ProductSlice.actions;
export default ProductSlice.reducer;

