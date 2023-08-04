import { createSlice } from "@reduxjs/toolkit";

const conctactsInitialState =[];
const contactsSlice = createSlice({
    name:'contacts',
    initialState: conctactsInitialState,
    reducers: {
        addContact(state,action){
            state.push(action.payload)
        },
        deleteContact(state,action){
            const index = state.findIndex(task=>task.id === action.payload)
            state.splice(index,1)
        }
    }
})

export const {addContact,deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;