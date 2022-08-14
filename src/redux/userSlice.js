import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    allUsers: [],
    user: {},
    status: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try{
      const response = await axios.get('https://randomuser.me/api?page={pageIndex}');
      const data = response.data.results[0];
      // return 2 formats of user
      //first is to store user to all users
      //second is to display the current user
      return [{
        picture: data?.picture?.large,
        fullName: `${data?.name?.title} ${data?.name?.first} ${data?.name?.last}`,
        email: data?.email,
        gender: data?.gender[0].toUpperCase(),
        cell: data?.cell,
        phone: data?.phone,
        location: JSON.stringify(data?.location),
        nat: data?.nat,
        age: data?.dob?.age,
        time: new Date().toString(),
        id: data?.id?.value,
        isWinner: false,
        timesPlayed: 0,
      },
      {
        age: data?.dob?.age,
        id: data?.id?.value,
        picture: data?.picture?.thumbnail,
        title: data?.name?.title,
        first: data?.name?.first,
        last: data?.name?.last,
        email: data?.email,
        gender: data?.gender[0].toUpperCase(),
        cell: data?.cell,
        phone: data?.phone,
        city: data?.location.city,
        country: data?.location.country,
        postcode: data?.location.postcode,
        nat: data?.nat,
      }]
  }
  catch(err){
        console.log(err.message)
    }
})

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
       clearSession: (state) => {
        state.allUsers = [];
        state.user = {};
        state.status = 'idle';
       },
       updateEmail: (state,action) => {
        const index = state.allUsers.findIndex(user => user.id === action.payload.id);
        state.allUsers[index].email = action.payload.value;
        state.user.email = action.payload.value;
       }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
          
          const winningNumber = Math.floor(Math.random() * 101)
        
          const currentUser = action.payload[0];
          //checking if user won
          if(currentUser.age === winningNumber){
            currentUser.isWinner = true;
          }
    
          const index = state.allUsers.findIndex(user => user.id === currentUser.id)
          if(index >= 0){
            state.allUsers[index].timesPlayed++;
          }else{
              state.allUsers.push(currentUser)      
          }

      state.user = action.payload[1]          
      state.status = 'succeeded'
     })
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
          })
      },
})

export const {clearSession,updateEmail} = userSlice.actions;
export const getUsers = (state) => state.users.allUsers;
export const getStatus = (state) => state.users.status;
export default userSlice.reducer;