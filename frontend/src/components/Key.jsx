import React from 'react';

function Key({value, onClick}){
    return (
        <button className="key" onClick= { onClick }>
          {value}
        </button>
      );
    
}

export default Key;