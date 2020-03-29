import { FactionBasic, FactionArmory, FactionChain, FactionCurrency, FactionTerritory } from '../models/faction.model';


class FactionService {

  retrieveFactionBasic(idList: Array<number>) {
    return FactionBasic.find({ "ID": { $in: idList } }, { '_id': 0 }).lean();
  }


  retrieveFactionArmory(idList: Array<number>) {
    return FactionArmory.find({ "ID": { $in: idList } }, { '_id': 0 }).lean();
  }


  retrieveFactionChain(idList: Array<number>) {
    return FactionChain.find({ "ID": { $in: idList } }, { '_id': 0 }).lean();
  }


  retrieveFactionCurrency(idList: Array<number>) {
    return FactionCurrency.find({ "ID": { $in: idList } }, { '_id': 0 }).lean();
  }

  retrieveFactionTerritory(idList: Array<number>) {
    return FactionTerritory.find({ "ID": { $in: idList } }, { '_id': 0 }).lean();
  }

}


export const factionService = new FactionService();
