import { Controller, Get, Param,Post,Body,Delete, Put } from '@nestjs/common';
import { Inputs, Players } from './player.entity';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
constructor(private readonly serverService: ServerService){}

    @Get()
    getPlayers():Players {
        return this.serverService.getPlayers();
    }
    @Get("player/:id")
    getPlayerInput(@Param('id') id:string): Inputs{
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
    updatePlayerInput(@Param('id') id:string , @Body('inputs') inputs:Inputs) {
        return this.serverService.updatePlayerInput(id,inputs);
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
