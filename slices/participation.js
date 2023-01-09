import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    data: null
}


const participationSlice = createSlice({
    name: 'participationReducer',
    initialState,
    reducers:{
        typeReducer: (state, action) => {
          state.data = action.payload
        }
    }
})


export const {typeReducer} = participationSlice.actions
export default participationSlice.reducer