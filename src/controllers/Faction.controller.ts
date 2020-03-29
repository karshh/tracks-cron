import { JsonController, Get, Res, QueryParam } from "routing-controllers";
import { factionService } from '../services/faction.service';

@JsonController("/faction")
export class FactionController {

  @Get("")
  async getAll(@Res() response: any,
    @QueryParam("id") id: string,
    @QueryParam("selection") selection: string) {
    if (id == null || selection == null) return response.status(400).send({ code: "ID_SELECTION_MANDATORY" })
    let idList = id.split(',');
    if (idList.filter(v => isNaN(+v)).length > 0) return response.status(400).send({ code: "INVALID_ID_QUERY" });
    return await factionService.retrieveFactionData(idList.map(value => +value), selection.split(','));
  }
}