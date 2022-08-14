import React,{useState} from 'react';
import { useSelector } from "react-redux";
import { UserCard } from '../Components/UserCard';
import { getUsers } from '../redux/userSlice';
import './SessionPlayers.css'

export const SessionPlayers = () => {
  let users = useSelector(getUsers);
  const [allUsers,setAllUsers] = useState(users);

  return (
    <>
    <h1 style={{textAlign: 'center'}}>{users.length == 0 ? 'No players yet!' : 'All players of the lottery'}</h1>
    {users.length > 0 && <div className='winners-card-container'>
    {allUsers.map(user => (
      <UserCard user={user} type="winner" key={user.id || user.time}/>
    ))}
    </div>}
    </>
  )
}