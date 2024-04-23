import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { AsyncThunkConfig, GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import axios from 'axios';
import { Product } from '../model/Product';


export const fetchProducts = createAsyncThunk<Product[], void, GetThunkAPI<AsyncThunkConfig>>('products/fetchProducts', async (_, thunkAPI: GetThunkAPI<AsyncThunkConfig>) => {
   
    try {
        
        const response = await axios.get('http://localhost:9000/products');
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue({error: "Failed to fetch the data"});
    }
   
});

type ProductsState = {
    products: Product[];
    loading: string;
    error: string|null;
}

const initialState: ProductsState = {
    products: [],
    loading: 'idle',
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    // extraReducers: builder => {
    //     builder.addCase(fetchProducts.pending, (state) => {
    //         state.loading = 'loading';
    //     });
    //     builder.addCase(fetchProducts.fulfilled, (state, action) => {
    //         state.loading = 'idle';
    //         state.products = action.payload;
    //     });
    //     builder.addCase(fetchProducts.rejected, (state, action) => {
    //         debugger;
    //         state.loading = 'idle';
    //         state.error = (action.payload as any).error;
    //     }); 
    // }
})

export default productsSlice.reducer;