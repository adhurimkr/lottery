import React from 'react';
import './Home.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers,clearSession } from '../redux/userSlice';
import { getStatus } from '../redux/userSlice';
import { UserCard } from '../Components/UserCard';

export const Home = () => {
const user = useSelector(state => state.users.user)
const status = useSelector(getStatus)
const dispatch = useDispatch();

const clear = () => {
    dispatch(clearSession());
}

   function generateUser(){
     dispatch(fetchUsers());
}


  return (
     <div className='home-main'>
     <button className='btn' onClick={generateUser}>Generate User</button>
     {status == 'loading' && <p>Loading...</p>}
     {status == 'succeeded' && <>
     <UserCard user={user} type="currentUser"/>
     <button className='btn' onClick={clear}>Clear session</button>
     </>}
     </div>
  )
}
