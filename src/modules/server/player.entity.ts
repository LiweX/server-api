export class Players {
    players: Player[];
}

export class Player {
    id: string;
    name: string;
    input: Input;
    position: Position;
    rotation: Rotation;
}

export class Input {
    left:boolean;
    right:boolean;
    up:boolean;
    constructor(){
        this.left=false;
        this.right=false;
        this.up=false;
    }
}

export class Position {
    x:number;
    y:number;
    z:number;
    constructor(){
        this.x=0;
        this.y=0;
        this.z=0;
    }
}

export class Rotation {
    w:number;
    x:number;
    y:number;
    z:number;
    constructor(){
        this.w=0;
        this.x=0;
        this.y=0;
        this.z=0;
    }
}
export class PlayerData{
    id:string;
    name:string;
}
export class Inputs{
    redball:Input;
    blueball:Input;
}

export class PlayersData{
    redball:PlayerData;
    blueball:PlayerData;
}