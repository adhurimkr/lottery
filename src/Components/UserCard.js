import React,{useState} from 'react';
import {useDispatch } from "react-redux";
import {updateEmail} from '../redux/userSlice';
import './UserCard.css'
import {AiOutlineEdit} from 'react-icons/ai'

export const UserCard = ({user,type}) => {
   const [isEditing,setIsEditing] = useState(false);
   const [newEmail,setNewEmail] = useState("");
   const dispatch = useDispatch();

   // change border color if an user is winner
    const classes = user.isWinner ? 'user-card winner' : 'user-card'

    function editEmail(){
        setIsEditing(true);
    } 

    const saveEmail = () => {
       dispatch(updateEmail({id: user.id,value: newEmail}))
       setIsEditing(false);
    }
    // create 2 types of card because the current user format and all users format are slightly different
    
    let content = type == 'currentUser' ?  <div className={classes}>
    <img src={user?.picture} alt="thumbnail"/>
    <div className='user-card-info'>
        <p><b>Title:</b></p>
        <p>{user?.title}</p>
    </div>

    <div className='user-card-info'>
        <p><b>First:</b></p>
        <p>{user?.first}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Last:</b></p>
        <p>{user?.last}</p>
    </div>

    {!isEditing && <div className='user-card-info'>
        <p><b>Email:</b></p>
        <p>{user?.email}</p>
        <AiOutlineEdit size={20} onClick={editEmail} style={{cursor: 'pointer'}}/>
    </div>}

    {isEditing && <>
        <input type='email' placeholder='Edit email' onChange={(e) => setNewEmail(e.target.value)}/>
        <button onClick={saveEmail}>Save</button>
    </>}

    <div className='user-card-info'>
        <p><b>Gender:</b></p>
        <p>{user?.gender}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Phone:</b></p>
        <p>{user?.phone}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Cell:</b></p>
        <p>{user?.cell}</p>
    </div>

    <div className='user-card-info'>
        <p><b>City:</b></p>
        <p>{user?.city}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Country:</b></p>
        <p>{user?.country}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Postcode:</b></p>
        <p>{user?.postcode}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Nat:</b></p>
        <p>{user?.nat}</p>
    </div>
 </div> :    
 
 <div className={classes}>
    <img src={user?.picture} alt="thumbnail"/>
    <div className='user-card-info'>
        <p><b>Name:</b></p>
        <p>{user?.fullName}</p>
    </div>


    <div className='user-card-info'>
        <p><b>Email:</b></p>
        <p>{user?.email}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Gender:</b></p>
        <p>{user?.gender}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Phone:</b></p>
        <p>{user?.phone}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Cell:</b></p>
        <p>{user?.cell}</p>
    </div>

    <div className='user-card-info'>
        <p><b>Nat:</b></p>
        <p>{user?.nat}</p>
    </div>
 </div>

  return (
    <>
    {content}
    </>
  )
}
