import { useState } from "react";

import Gallery from "./Gallery";
import Profile from "./Profile";
import './App.css';
import Card from "./components/Card";
import Buttons from "./components/Buttons";


function App() {
const [count, setCount] = useState(0);
function handleClick() {
  setCount (count+1);
}

  return (
    <>
    <Buttons handleClick={handleClick} text="click Me">
    <h1> {count} </h1>
    </Buttons>
  


    {/* <Gallery/>
    <Profile/>
    <Card name="veer shinde"> 
    <h1> lorem test this dummy </h1>
    <p> react components is javascript reguler funtion</p>
    <p> components is reusable and component start with capital letter</p>
    </Card> */}

    </>
  );
}

export default App;
