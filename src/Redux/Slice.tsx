import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:null,
    token:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user,token}=action.payload
            state.user=user;
            state.token=token;
        },
        logOut:(state)=>{
            state.user=null;
            state.token=null
        }
    }
})
export const {setUser,logOut}=authSlice.actions
export default authSlice.reducer
export const userCurrentToken=(state: { auth: { token: string | null; }; })=>state.auth.token
export const userCurrentUser=(state: { auth: { user: string; }; })=>state.auth.user