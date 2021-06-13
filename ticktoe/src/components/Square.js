import React from 'react'



const Square =({value,onClick,isWinningSqaures}) => {
 
    return (
    <button  type="button"
     className="square"

     onClick={onClick}

     style={{frontWeight:isWinningSqaures ? ' bold':'normal'}}
    //   onClick={(value)=>{
    //     console.log(value);
    // }} 
    >
        {value}
        </button>
        )

}

export default Square
