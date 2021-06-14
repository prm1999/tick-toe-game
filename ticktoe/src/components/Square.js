import React from 'react'



const Square =({value,onClick,isWinningSqaures}) => {
 
    return (
    <button  type="button"

     onClick={onClick}
    className={`square ${isWinningSqaures ? 'winning':''}${value==='X'?'text-green':'text-orange'}`}
    //  style={{frontWeight:isWinningSqaures ? ' bold':'normal'}}
    //   onClick={(value)=>{
    //     console.log(value);
    // }} 
    >
        {value}
        </button>
        )

}

export default Square
