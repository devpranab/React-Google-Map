//import './App.css';
//import Map from './Map';
import { useState } from "react";
import Direction from "./Direction";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  return (
    <>
    <h2>Google Map in React Project</h2>
    <h3>Display Driving Direction and Route on Google Map</h3>
    {/* <Map/>  */}
    <input type="text" placeholder="Starting From" onBlur={e => setOrigin(e.target.value)} />
    <input type="text" placeholder="Going To" onBlur={e => setDestination(e.target.value)} />
    <Direction origin={origin} destination={destination}/>
    </>
  );
}

export default App;