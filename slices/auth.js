import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isLoggedIn: false
}


const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers:{
        loginReducer: (state, action) => {
          state.isLoggedIn = action.payload
        }
    }
})


export const {loginReducer} = authSlice.actions
export default authSlice.reducer