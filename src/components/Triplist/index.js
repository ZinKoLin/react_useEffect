import React, { useEffect, useState } from 'react'

function Index() {

    let [trips, setTrips] = useState([]);

    

    useEffect(()=>{
        fetch('http://localhost:3000/trips')
        .then(res=>res.json())
        .then(data=>{
            setTrips(data)
       
    })
    },[]);//dependcy arrary

    console.log(trips)

  return (
    <div>
      <h1>Ready To go</h1>

      <ul>
        {trips.map(trip=>(
            <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>price - {trip.price} mmk</p>
        </li>
        ))}
        
        
      </ul>
    </div>
  )
}

export default Index
