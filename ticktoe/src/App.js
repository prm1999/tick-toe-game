import React,{useState} from "react";
import  Board  from './components/Board'
import "./styles/root.scss";
// import {calculateWinner} from "./helpers";
import {calculateWinner} from './helpers'

 const App =()=>{
  const [board,setBoard]=useState(Array(9).fill(null))
  console.log(board);

  const [isNext,setIsNext]=useState(false);

  const winner= calculateWinner(board);
  console.log(winner);

  const message=winner 
  ? `winner is ${winner}`
  :` Next player is ${isNext ? 'X':'O'}`;

  const handleSquareClick=(position)=>{
    if(board[position]||winner) return;// if there is any value there will be no upgration
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
   return (
    <div className="app">
     <h1>Tic Toe</h1>
    
    <h2> {message}</h2>
    <Board board={board} handleSquareClick={handleSquareClick}/>
  </div>
   );
 };
export default  App;
