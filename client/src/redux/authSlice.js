import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    
    user:"",
    jwt:"",
    loading:false,
    error:""
}


export const signInUser = createAsyncThunk('signinuser', async(body)=>{
    const res = await fetch('http://localhost:8098/api/auth/login',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addToken: (state, action)=>{
            state.jwt = localStorage.getItem('token');
        },
        addUser: (state, action)=>{
            state.jwt = localStorage.getItem('user');
        },
        logout: (state, action)=>{
            state.jwt = null;
            localStorage.clear()
        }

    },
    extraReducers:
        
        builder => {
            builder
              .addCase(signInUser.pending, (state, action) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(signInUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.error) {
                  state.error = payload.error;
                } else {
                  state.msg = payload.msg;
                  state.user = payload.user;
                  state.jwt = payload.jwt;
        
             
                  localStorage.setItem('user', JSON.stringify(payload.user));
                  localStorage.setItem('token', payload.jwt);
                
                }
              })
              .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              });
          },
    
  
})
export const {addToken, addUser, logout} = authSlice.actions

export default authSlice.reducer