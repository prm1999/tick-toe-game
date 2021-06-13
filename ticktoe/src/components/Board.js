import React ,{useState} from 'react'

import Square from './Square'

const Board = () => {

  const [board,setBoard]=useState(Array(9).fill(null))
  console.log(board);

  const [isNext,setIsNext]=useState(false)

  

  const handleSquareClick=(position)=>{
    if(board[position]) return;// if there is any value there will be no upgration
    setBoard ((prev)=>{

      return prev.map((square,pos)=>{
        {/*for mapping */}
        if(pos=== position){
          return  isNext ?'X':'O';

        }
        return square;
      });

    });
    setIsNext(prev=>!prev);//update funtion of X and O
  };

  const  renderSquare = position => {
    return(
      <Square 
      value={board[position]}
      onClick={()=>handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
          {/* <Square value={board[0]} onClick={()=>
          handleSquareClick(0)
          }/>
          <Square value={board[1]}/>
          <Square value={board[2]}/> */}

          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
    <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {/* <Square value={board[3]}/>
          <Square value={board[4]}/>
          <Square value={board[5]}/> */}
      </div>
    <div className="board-row">

          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
          {/* <Square value={board[6]}/>
          <Square value={board[7]}/>
          <Square value={board[8]}/> */}
      </div>
    </div>
  )
}

export default Board
