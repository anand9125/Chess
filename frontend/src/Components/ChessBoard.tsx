import { Color, PieceSymbol, Square } from 'chess.js'
import { useState } from 'react';



function ChessBoard({board ,socket}:{
    board:({
        squre:Square,
        type:PieceSymbol,
        color:Color
    }|null)[][];
    socket:WebSocket
}) {
     const [from,setFrom] = useState<Square|null>(null); 
     const [to,setTo] = useState<Square|null>(null);

  return (
    <div className='text-white-200'>
        {board.map((row,i)=>{
            return <div key={i} className='flex'>
                {row.map((square,j)=>{
                    return <div onClick={()=>{
                        
                    }} key={j} className={`w-16 h-16 ${(i+j)%2 ? "bg-green-500":"bg-gray-300"}`}>
                       <div className='w-full justify-center flex'>
                        {square?square.type:""}
                        
                        </div>

                    </div>
                })}
            </div>
        })}
           
        


    </div>
  )
}

export default ChessBoard