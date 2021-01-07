import React,{useEffect} from 'react'
import axios from'axios'
import UserCard from './userCard'

function ListUsers({users, setUsers}) {
    
 
   useEffect(()=>{
    const fetchData=()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err))
    }
    fetchData()
   },[])

   return(
 
   <div style={{display:'flex', justifyContent:'space-between'}}>
  {users.map((user,i)=><UserCard user={user} key={i} />)}
 
 </div>
  )
}
export default ListUsers;
