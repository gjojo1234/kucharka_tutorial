import React, {useState, useEffect} from 'react';
import Material from '../components/Material';
import './main.css';

const Main = () => {
  const [materialy, setMaterialy] = useState([]);
  const [serverMessage, setServerMessage] = useState("");
  const [kliknutoUzivatelem, setKliknutoUzivatelem] = useState("");
  const pridanieMaterialu = async () => { 
    const data = await fetch("http://localhost:5000/getmaterial");
    const finalData = await data.json();
    const {msg, documents} = finalData;
    setMaterialy(documents);
    setServerMessage(msg);
   }
  useEffect(() => {
    pridanieMaterialu();
  
    
    }
  , []);
  const kliknuto = (material) => { 
    setKliknutoUzivatelem(material);
   }
  
  return (
    <div className='main'>
      {
        materialy.map((material, index) => { 
          return (
            <Material eventklik={kliknuto} key={index} name={material.name} cislovporadi={index}/>
          )
        })
      }
      
      <div className='msg'>{serverMessage}</div>
      {kliknutoUzivatelem}
    </div>
  )
}

export default Main;