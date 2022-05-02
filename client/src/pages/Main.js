import React, {useState} from 'react';

const Main = () => {
  const [materialy, setMaterialy] = useState([]);
  const [serverMessage, setServerMessage] = useState("");
  const pridanieMaterialu = async () => { 
    const data = await fetch("http://localhost:5000/getmaterial");
    const finalData = await data.json();
    const {msg, documents} = finalData;
    setMaterialy(documents);
    setServerMessage(msg);
   }
  return (
    <div>
      {
        materialy.map((material, index) => { 
          return (
            <div key={index}>{material.name}</div>
          )
        })
      }
      <div className='btn' onClick={pridanieMaterialu}>pridanie</div>
      <div className='msg'>{serverMessage}</div>
    </div>
  )
}

export default Main;