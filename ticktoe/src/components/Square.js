import React from 'react'



const Square =({value,onClick}) => {
 
    return (
    <button  type="button"
     className="square"

     onClick={onClick}
    //   onClick={(value)=>{
    //     console.log(value);
    // }} 
    >
        {value}
        </button>
        )

}

export default Square
