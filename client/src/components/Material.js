import React from 'react';
import './material.css';

const Material = ({name, cislovporadi, eventklik}) => {
  return (
    <div className='materialy'>
        <div className='matName'>
          {cislovporadi} - {name}
        </div>
        <div className='btn' onClick={() => {
            eventklik(name)
        }}>zobraz detail</div>
    </div>
    
  )
}

export default Material