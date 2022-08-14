import React,{useState} from 'react';
import { useSelector } from "react-redux";
import { UserCard } from '../Components/UserCard';
import { getUsers } from '../redux/userSlice';
import './Winners.css'

export const Winners = () => {
  const [desc,setDesc] = useState(true)
  let users = useSelector(getUsers).filter(user => user.isWinner === true);
  const [sortedUsers,setSortedUsers] = useState(users.sort((a,b) => b.time.localeCompare(a.time)));

   function sortUsers(){
    setSortedUsers(users.sort((a,b) => desc ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time))) 
    setDesc(!desc)   
   }  
  
  return (
    <>
    <h1 style={{textAlign: 'center'}}>{users.length == 0 ? 'No winners yet!' : 'All winners of the lottery'}</h1>
    {users.length > 0 && <div className='winners-card-container'>
    {sortedUsers.map(user => (
      <UserCard user={user} type="winner" key={user.id || user.fullName}/>
    ))}
    <div style={{width: '100%',display: 'flex'}}>
    <button className='btn' onClick={sortUsers}>{desc? 'Sort ASC' : 'Sort DESC'}</button>
    </div>
    </div>}
    </>
  )
}
