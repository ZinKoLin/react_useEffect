import React, {   useState } from 'react'
import useFetch from '../../hooks/useFetch';
function Index() {

 

    let [url, setUrl]= useState('http://localhost:3000/trips');
    
    let{data : trips, loading, error} = useFetch(url);

    return (
    <div>
      {error && <p>{error}</p>}
     {!error && <div>
      <h1>Ready To go</h1>
     {loading &&  <p>loading Trip</p>}
      <button onClick={()=>setUrl('http://localhost:3000/trips')}>All Trip</button>
      <button onClick={()=>setUrl('http://localhost:3000/trips?country=Myanmar')}>Trip Myanmar</button>

      <ul>
        {trips && trips.map(trip=>( //trips have?
            <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>price - {trip.price} mmk</p>
        </li>
        ))}
        
        
      </ul>
      </div>}
    </div>
  )
}

export default Index
