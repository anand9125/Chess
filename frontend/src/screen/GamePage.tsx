import { useEffect, useState } from "react";
import ChessBoard from "../Components/ChessBoard"
import { useSocket } from "../hook/useSocket"
import { Chess } from "chess.js";

export const INIT_GAME='init_game';
export const MOVE='move';
export const GAME_OVER='game_over';

function GamePage() {
  const socket= useSocket()
  const[chess,setChess]= useState(new Chess());
  const[board,setBoard]= useState(chess.board());


   useEffect(()=>{
    if(!socket){
      return;
    }
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess());
          setBoard(chess.board());
          console.log(message.payload);
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log(message.payload);
          break;
        case GAME_OVER:
          console.log(message.payload);
          break;
      }
    };
   })

  if(!socket){
    return <div className="flex justify-center items-center">Connecting</div>
  }
  return (
   <div className="flex justify-center">
     <div className="pt-8 max-w-screen-lg">
      <div className="grid gird-cols-6 gap-4 md:grid-cols-2  justify-center">
       <div>
        {/* @ts-ignore */}
         <ChessBoard board={board} Sockekt={socket}></ChessBoard>
       </div>
       <div className="grid-cols-span-2">
        <button onClick={()=>socket.send(JSON.stringify({
          type:INIT_GAME,
        }))}>
          Play
        </button>
       </div>
      </div>
     </div>
     
   </div>
  )
}

export default GamePage