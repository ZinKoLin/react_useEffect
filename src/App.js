
import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/Triplist/index.js';
function App() {
  
let[show,setShow] = useState(true);
  return (
    <>

<button onClick={()=>setShow(false)}>Hide Trip</button>
   
   {show && <TripList/>} 
    
    </>
  );
}

export default App;
