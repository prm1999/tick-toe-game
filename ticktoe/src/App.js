import React,{useState} from "react";
import  Board  from './components/Board'
import  History  from './components/History'

import "./styles/root.scss";
// import {calculateWinner} from "./helpers";
import {calculateWinner} from './helpers'

 const App =()=>{
  const [history,setHistory]=useState(
    [{board:Array(9).fill(null),isNext:true}
    ]);

 const [currentMove,setCurrentMove]=useState(0);
 
 const current =history[currentMove];

 console.log(history)

  // console.log(board);

  // const [isNext,setIsNext]=useState(false);

  const winner= calculateWinner(current.board);
  console.log(winner);

  const message=winner 
  ? `winner is ${winner}`
  :` Next player is ${current.isNext ? 'X':'O'}`;

  const handleSquareClick=(position)=>{
    if(current.board[position]||winner){
       return;
      }// if there is any value there will be no upgration
    
    
    
      setHistory ((prev)=>{

        const last=prev[prev.length-1];


      const newBoard=last.board.map((square,pos)=>{
        {/*for mapping */}
        if(pos=== position){
          return  last.isNext ?'X':'O';

        }
        return square;
      });
      return prev.concat({board:newBoard, isNext:!last.isNext});

    });

    setCurrentMove(prev=>prev+1)
    // setIsNext(prev=>!prev);//update funtion of X and O
  };

  const moveTo=(move)=>{
    setCurrentMove(move)

  }


   return (
    <div className="app">
     <h1>Tic Toe</h1>
    
    <h2> {message}</h2>
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
  <History history={history} moveTo={moveTo}/>
  
  </div>
   );
 };
export default  App;
