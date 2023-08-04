import { createSlice } from "@reduxjs/toolkit";

const filterInitialState ='';
const filterSlice = createSlice({
    name:'filter',
    initialState: filterInitialState,
    reducers: {
        addFilter(state,action){
            state.push(action.payload)
        },
        deleteFilter(state,action){
            const index = state.findIndex(task=>task.id === action.payload)
            state.splice(index,1)
        }
    }
})

export const {addFilter, deleteFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;