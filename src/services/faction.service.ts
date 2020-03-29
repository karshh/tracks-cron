import { FactionBasic, FactionArmory, FactionChain, FactionCurrency, FactionTerritory, FactionStat } from '../models/faction.model';


class FactionService {

  async retrieveFactionData(idList: Array<number>, selections: Array<string>) {
    let result: any = {};
    if (selections.includes("basic")) result.basic = await this.retrieveFactionBasic(idList);
    if (selections.includes("armory")) result.armory = await this.retrieveFactionArmory(idList);
    if (selections.includes("chain")) result.chain = await this.retrieveFactionChain(idList);
    if (selections.includes("currency")) result.currency = await this.retrieveFactionCurrency(idList);
    if (selections.includes("territory")) result.territory = await this.retrieveFactionTerritory(idList);
    if (selections.includes("stat")) result.stat = await this.retrieveFactionStat(idList);

    return result;
  }

  async retrieveFactionBasic(idList: Array<number>) {
    return (await FactionBasic.find({ "ID": { $in: idList } }).lean()).map(d => Object.assign(d, { _id: d._id.toHexString() }));
  }


  async retrieveFactionArmory(idList: Array<number>) {
    return (await FactionArmory.find({ "ID": { $in: idList } }).lean()).map(d => Object.assign(d, { _id: d._id.toHexString() }));
  }


  async retrieveFactionChain(idList: Array<number>) {
    return (await FactionChain.find({ "ID": { $in: idList } }).lean()).map(d => Object.assign(d, { _id: d._id.toHexString() }));
  }


  async retrieveFactionCurrency(idList: Array<number>) {
    return (await FactionCurrency.find({ "ID": { $in: idList } }).lean()).map(d => Object.assign(d, { _id: d._id.toHexString() }));
  }

  async retrieveFactionTerritory(idList: Array<number>) {
    return (await FactionTerritory.find({ "ID": { $in: idList } }).lean()).map(d => Object.assign(d, { _id: d._id.toHexString() }));
  }

  async retrieveFactionStat(idList: Array<number>) {
    return (await FactionStat.find({ "ID": { $in: idList } }).lean()).map(d => Object.assign(d, { _id: d._id.toHexString() }));
  }
}


export const factionService = new FactionService();
