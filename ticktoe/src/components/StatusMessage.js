import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //     {/* const message=winner
  // ? `winner is ${winner}`
  // :` Next player is ${current.isNext ? 'X':'O'}`; */}

  const noMoveLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner &&
      <>
      winner is {``}
      <span className={winner ==='X'? 'text-green':'text-orange'} >
        {winner}
      </span>
      </> 
      }
      {/* `winner is ${winner}` */}
      {!winner &&
        !noMoveLeft &&
        <>
         Next player is <span className={current.isNext ? 'text-green':'text-orange'} >
           {current.isNext ? 'X' : 'O'}{''}</span>
        </>}
      {!winner && noMoveLeft && 
      <>
      <span className='text-green'>X</span> and <span className='text-orange'> O</span> tied
      </>
   }
    </div>
  );
};

export default StatusMessage;
