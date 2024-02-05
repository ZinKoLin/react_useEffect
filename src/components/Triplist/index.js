import React, { useEffect, useState } from 'react'

function Index() {

    let [trips, setTrips] = useState([]);

    let [url, setUrl]= useState('http://localhost:3000/trips');

    

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTrips(data)
       
    })
    },[url]);//dependcy arrary

    console.log(trips)

  return (
    <div>
      <h1>Ready To go</h1>
      <button onClick={()=>setUrl('http://localhost:3000/trips')}>All Trip</button>
      <button onClick={()=>setUrl('http://localhost:3000/trips?country=Myanmar')}>Trip Myanmar</button>

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
