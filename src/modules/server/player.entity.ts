export class Players {
    players: Player[];
}

export class Player {
    id: string;
    name: string;
    inputs: Inputs;
}

export class Inputs {
    left:boolean;
    right:boolean;
    up:boolean;
}