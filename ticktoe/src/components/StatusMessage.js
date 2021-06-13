import React from 'react'

const StatusMessage = ({winner,current}) => {
  //     {/* const message=winner 
  // ? `winner is ${winner}`
  // :` Next player is ${current.isNext ? 'X':'O'}`; */}
      
  const noMoveLeft=current.board.every(el=>el!==null)

  return (
    
   
  <h2>
    {winner && `winner is ${winner}`}
    {!winner &&
    !noMoveLeft &&` Next player is ${current.isNext ? 'X':'O'}` }
    {!winner && noMoveLeft && 'X and O tied'}
  </h2>



  )
}

export default StatusMessage
