import { JsonController, Get, Res, QueryParam } from "routing-controllers";
import { factionService } from '../services/faction.service';

@JsonController("/faction")
export class FactionController {

  @Get("")
  async getAll(@Res() response: Response,
    @QueryParam("id") id: string,
    @QueryParam("selections") selections: string) {
    return await factionService.retrieveFactionBasic(id.split(',').map(value => +value));

  }
}