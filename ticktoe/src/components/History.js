import React from 'react'

const History = ({history,moveTo,currentMove}) => {
  return (
    <div className="history-wrapper">
      <div className="history">
    <ul>
      {
        history.map((_,move) =>{
          return(
             <li key={move}>
          <button 

            className={`btn-move ${move === currentMove ? 'active':''}`}
          // style={
          //   {
          //     fontWeight:move===currentMove?'bold':'normal'
          //   }
          // }
          type="button" 
          onClick={()=>{
            moveTo(move);
          }}
          > 
          
          {
            move ===0 ?"Go to game start"
            :`Go to move #${move}`
          }</button>
        </li>
        )
        })
      }
     
      
    </ul>
    </div>
    </div>
  )
}

export default History
