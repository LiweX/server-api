import { Injectable } from '@nestjs/common';
import { Players,Player, Position, Rotation, PlayersData, Inputs } from './player.entity';
import { Input } from './player.entity';

@Injectable()
export class ServerService {
    //private players : Players = {players:[]}
    private players : Players = {players:[{
                                            "id": "0",
                                            "name": "Pepe",
                                            "input": {
                                                "left": false,
                                                "right": false,
                                                "up": false
                                            },
                                            "position": {
                                                "x": 0,
                                                "y": 0,
                                                "z": 0
                                            },
                                            "rotation": {
                                                "w": 0,
                                                "x": 0,
                                                "y": 0,
                                                "z": 0
                                            }
                                }]}

    getPlayers(): Players {
        return this.players;
    }
    getInputs(): Inputs {
        var inputs:Inputs=new Inputs();
        inputs.redball=this.players.players[0].input;
        inputs.blueball=this.players.players[1].input;
        return inputs;
    }

    getPlayersData(): PlayersData{
        var playersData = new PlayersData();
        playersData.redball = {id:this.players.players[0].id,name:this.players.players[0].name};
        playersData.blueball = {id:this.players.players[1].id,name:this.players.players[1].name};
        return playersData;
    }

    getNumPlayers(): string {
        return this.players.players.length.toString();
    }

    getPlayerName(id:string): string {
        return this.players.players.find((item) => item.id === id).name;
    }

    getPlayerInput(id:string): Input {
        return this.players.players.find((item) => item.id === id).input;
    }

    updatePlayerInput(id:string,newInput:Input) {
        this.players.players.find((item) => item.id === id).input = newInput;
    }

    createPlayer(name:string):string{
        var newID = (Math.floor(Math.random()*2000)+1).toString();
        var newPlayer:Player = new Player();
        newPlayer.id = newID;
        newPlayer.name = name;
        newPlayer.input = new Input();
        newPlayer.position = new Position();
        newPlayer.rotation = new Rotation();
        this.players.players.push(newPlayer);
        return this.players.players.find((item) => item.id === newID).id;
    }

    deletePlayers() {
        this.players.players.splice(0);
    }

    getPosition(id:string):Position{
        return this.players.players.find((item) => item.id === id).position;
    }
    getRotation(id:string):Rotation{
        return this.players.players.find((item) => item.id === id).rotation;
    }
    setPosition(id:string,newPosition:Position){
        this.players.players.find((item) => item.id === id).position = newPosition;
    }
    setRotation(id:string,newRotation:Rotation){
        this.players.players.find((item) => item.id === id).rotation = newRotation;
    }

    test(string:string) {
        console.log(string);
    }
}