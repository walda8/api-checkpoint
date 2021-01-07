import React from 'react'
import { useParams, Link } from 'react-router-dom'


function Profile({users}) {
    const {userId}=useParams()
    const des=users.find(el=>el.id===Number(userId))
 
 
  
    return ( 
        <div>
        <h1>{des.name}</h1>
                    <h3>Contact:</h3>
                    
                      <p>  email:{des.email} - Tel: {des.phone} - WebSite: {des.website} </p>
                    
                    <h3>Adresse:</h3>
                    <p>
                    {des.address.city}, {des.address.street}, {des.address.suite} - {des.address.zipcode}
                    </p>
                    <h3>Company:</h3>
                     <p>
                        {des.company.name} <br />
                        {des.company.catchPhrase}
                    </p>
                    <span><Link to="/">Back Home</Link></span>
       </div>
    )
}

export default Profile;
