import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import CharacterCard from "./components/character.js";

const App = () => {
  const [data, setData] = useState([]);
  console.log("top");
  useEffect(()=>{
    console.log("first render")
    axios.get("https://swapi.co/api/people/")
    .then(res =>{
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, []);
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {data.map(data=>{
          return(
        <CharacterCard key={data.name} 
        name={data.name} 
        birth_year={data.birth_year} 
        height={data.height}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
