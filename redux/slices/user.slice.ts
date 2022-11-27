import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import userApi from '../../api/module/user.api'

interface UserStateInterface {
  data: {
    token: string,
    user: {
      lastName: string,
      firstName: string,
      email: string,
      address: string,
      wallet: string,
    }
  },
  loading: boolean,
  error: string,
  isAdmin: boolean
}


const initialState: UserStateInterface = {
  data: {
    token: '',
    user: {
      lastName: '',
      firstName: '',
      email: '',
      address: '',
      wallet: '',
    }
  },
  loading: false,
  error: '',
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder.addCase(userApi.signIn.pending, (state: UserStateInterface, action)=>{
        state.loading = true
      })
      .addCase(userApi.signIn.fulfilled, (state: any, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(userApi.signIn.rejected, (state: any, action :any) => {
        state.error = action.payload
        state.loading = false
      })
  },
})




export const userSelector = (state: UserStateInterface) => state.data

export default userSlice.reducer