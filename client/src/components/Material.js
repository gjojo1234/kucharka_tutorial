import React from 'react';

const Material = ({name, cislovporadi, eventklik}) => {
  return (
    <div>
        {cislovporadi} - {name}
        <div className='btn' onClick={() => {
            eventklik(name)
        }}>zobraz detail</div>
    </div>
    
  )
}

export default Material