import { Controller, Get, Param,Post,Body,Delete, Put } from '@nestjs/common';
import { Input, Players, Position,Rotation,PlayersData,Inputs } from './player.entity';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
constructor(private readonly serverService: ServerService){}

    @Get()
    getPlayers():Players {
        return this.serverService.getPlayers();
    }
    @Get("inputs")
    getInputs():Inputs {
        return this.serverService.getInputs();
    }
    @Get("playersData")
    getPlayersData():PlayersData {
        return this.serverService.getPlayersData();
    }
    @Get("position/:id")
    getPosition(@Param('id') id:string):Position {
        return this.serverService.getPosition(id);
    }
    @Get("rotation/:id")
    getRotation(@Param('id') id:string):Rotation {
        return this.serverService.getRotation(id);
    }
    @Get("player/:id")
    getPlayerInput(@Param('id') id:string): Input{
        return this.serverService.getPlayerInput(id);
    }
    @Get("players")
    getNumPlayers(): string{
        return this.serverService.getNumPlayers();
    }
    @Post()
    createPlayer(@Body('name') name: string):string{
        return this.serverService.createPlayer(name);
    }
    @Put("player/:id")
    updatePlayerInput(@Param('id') id:string , @Body('inputs') input:Input) {
        return this.serverService.updatePlayerInput(id,input);
    }
    @Put("position/:id")
    setPosition(@Param('id') id:string , @Body('position') position:Position){
        return this.serverService.setPosition(id,position);
    }
    @Put("rotation/:id")
    setRotation(@Param('id') id:string , @Body('rotation') rotation:Rotation){
        return this.serverService.setRotation(id,rotation);
    }
    @Put("test")
    test(@Body('test') string:string) {
        return this.serverService.test(string);
    }
    @Delete()
    deletePlayers(){
        return this.serverService.deletePlayers();
    }
}
