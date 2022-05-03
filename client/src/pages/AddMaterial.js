import React, {useState} from 'react';


const AddMaterial = () => {
  const [vstupOdUzivatela, setVstupOdUzivatela] = useState("");
  const vlozeniDoDB = () => { 
    fetch("http://localhost:5000/savematerial", {
      method: 'post',
      headers: {
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body: JSON.stringify({name: vstupOdUzivatela})
    }).then((data) => {
      return data.json()
    }).then((finalData) => { 
      console.log(finalData.msg)
      setVstupOdUzivatela("")
     })
   }
  return (
    <div>
      <input type="text" value={vstupOdUzivatela} onInput={(e)=>{
        setVstupOdUzivatela(e.target.value)
      }}/>
      <div className='btn' onClick={vlozeniDoDB}>vlozenie</div>
    </div>
  )
}

export default AddMaterial;