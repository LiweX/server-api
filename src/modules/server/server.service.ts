import { Injectable } from '@nestjs/common';
import { Players } from './player.entity';
import { Inputs } from './player.entity';

@Injectable()
export class ServerService {
    private players : Players = {players:[]}
    // private players : Players = {players:[{
    //                                         "id": "0",
    //                                         "name": "Pepe",
    //                                         "inputs": {
    //                                             "left": false,
    //                                             "right": false,
    //                                             "up": false
    //                                         }
    //                             }]}
    

    getPlayers(): Players {
        return this.players;
    }

    getNumPlayers(): string {
        return this.players.players.length.toString();
    }

    getPlayerName(id:string): string {
        return this.players.players.find((item) => item.id === id).name;
    }

    getPlayerInput(id:string): Inputs {
        return this.players.players.find((item) => item.id === id).inputs;
    }

    updatePlayerInput(id:string,newInput:Inputs) {
        this.players.players.find((item) => item.id === id).inputs = newInput;
    }

    createPlayer(name:string):string{
        var newID = (Math.floor(Math.random()*2000)+1).toString();
        this.players.players.push({
            id: newID,
            name,
            inputs:{left:false,right:false,up:false},
        })
        return this.players.players.find((item) => item.id === newID).id;
    }

    deletePlayers() {
        this.players.players.splice(0);
    }

    test(string:string) {
        console.log(string);
    }
}