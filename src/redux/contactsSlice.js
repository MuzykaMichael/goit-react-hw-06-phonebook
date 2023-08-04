import { createSlice } from "@reduxjs/toolkit";
import { createAction, nanoid } from "@reduxjs/toolkit";

const conctactsInitialState =[
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];
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