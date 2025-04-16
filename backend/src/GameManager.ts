import { WebSocket } from 'ws';
import { INIT_GAME, MOVE } from './message';
import { Game } from './Game';
export class GameManager {
    private games:Game[]; //list of games lets 100 games are running b1 send move then find which game in b1 and send the move
    //we are maintaining the global array of game
    private pendingUser:WebSocket|null;
    private users:WebSocket[];
   
    constructor(){
        this.games=[];
        this.pendingUser=null;
        this.users=[];
    }

    addUser(scoket:WebSocket){
        this.users.push(scoket);
        this.addHandler(scoket)

    }
    removeUser(socket:WebSocket){
       this.users=this.users.filter(x=>x!==socket);
       //stop the game because the user left
    }
    private addHandler(socket:WebSocket){
        socket.on('message',(data)=>{
              const message=JSON.parse(data.toString());

              if(message.type===INIT_GAME){
                if(this.pendingUser){
                    //start the game
                    const game =new Game(this.pendingUser,socket);
                    this.games.push(game);
                    this.pendingUser=null;

                }
                else{
                    this.pendingUser=socket;
                }
            }
            if(message.type===MOVE){
                //find the game
                const game=this.games.find(x=>x.player1===socket||x.player2===socket);
                if(game){
                    game.makeMove(socket,message.move); //socket specific userr want to this specific move
                }

            }
        });

    }
    
}