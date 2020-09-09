import React from 'react';
function DisplayBox( {expression }){
    return (
        <div className = "display-box">
            {expression}
        </div>
    );
}

export default DisplayBox;