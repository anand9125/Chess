import { WebSocket } from "ws";
import {Chess }from 'chess.js';
import { INIT_GAME, MOVE } from "./message";


export class Game{
    public player1:WebSocket;  
    public player2:WebSocket;
    private board:Chess
    private startTime:Date;
    private moveCount:number=0;

    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board= new Chess(); 
        this.startTime=new Date();
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:"white"
            }
        }));

        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color:"black"
            }
        }));
    }

    makeMove(socket:WebSocket,move:{
        from:string,
        to:string
    }){
      
       if(this.moveCount %2 ===0 && socket !== this.player1){  //game uses this.board.moves.length % 2 to determine whose turn it is:
      //Even number of moves (0, 2, 4...) → White's turn (player1)
      //Odd number of moves (1, 3, 5...) → Black's turn (player2)

        return;
       }
       if(this.moveCount % 2 ===1 && socket !== this.player2){
           return;
       }
       try{
           this.board.move(move);
          
       }
        catch(e){
            return;
            //invalid move
        }
        
        if(this.board.isGameOver()){
            this.player1.send(JSON.stringify({type:'game_over',
                payload:{
                   winner:this.board.turn()=="w"? "black":"white",
                }
            }));
            this.player2.send(JSON.stringify({type:'game_over',
                payload:{
                    winner:this.board.turn()=="w"? "black":"white",
                 }
            }));
            return;
        }
        if(this.board.moves.length % 2 === 0){
            this.player2.send(JSON.stringify({
                type:MOVE,
                payload:move
            }))
        }
        else{
            this.player1.send(JSON.stringify({
                type:MOVE,
                payload:move
            }))
        }
        this.moveCount++;

       //check is the game is over

       //send the updated board to the both the player

    }

}