import { createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/module/product.api'

interface ProductInterface {

    data: []
    loading: Boolean,
    error: String
}


const initialState: ProductInterface = {
    data:[],
    loading: false,
    error: ''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(productApi.getProduct.pending, (state: ProductInterface, action) => {
            state.loading = true
        })
            .addCase(productApi.getProduct.fulfilled, (state: any, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(productApi.getProduct.rejected, (state: any, action: any) => {
                state.error = action.payload
                state.loading = false
            })
    },
})




export const productSelector = (state: any) => state.product.data

export default productSlice.reducer