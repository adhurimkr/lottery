import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import { getUsers } from '../redux/userSlice';
import './Stats.css'

export const Stats = () => {
  const users = useSelector(getUsers);
  const [natStats,setNatStats] = useState([]);
  const [desc,setDesc] = useState(false);
  const nats = new Set(users.map(us => us.nat))

  useEffect(() => {
    for (const nationality of nats.values()) {
      const playersLength = users.filter(user => user.nat == nationality).length;
      setNatStats(prev => [...prev,{nat: nationality,players: playersLength}])
   }

  },[])

  function sortStats(){
      setNatStats(prev => prev.sort((a,b) => desc ? a.players - b.players : b.players - a.players))
      setDesc(prev => !prev);
  }

  return (
      <div className='stats-container'>
        <h1>Statistics</h1>
        <table>
          <thead>
          <tr>
            <th>
              Nationality
            </th>
            <th>
              Players
            </th>
          </tr>
          </thead>
        
          <tbody>
        {natStats.map(st => {
          return  <tr key={st.nat}>
            <td>{st.nat}</td>
            <td>{st.players}</td>
          </tr>
        })}
        </tbody>
        </table>
        <button className='btn' onClick={sortStats}>{desc? 'Sort ASC' : 'Sort DESC'}</button>
      </div>
  )
}
