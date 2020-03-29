import * as mongoose from 'mongoose'

var factionBasicSchema = new mongoose.Schema({});
var factionTerritorySchema = new mongoose.Schema({});
var factionChainSchema = new mongoose.Schema({});
var factionCurrencySchema = new mongoose.Schema({});
var factionArmorySchema = new mongoose.Schema({});
var factionStatSchema = new mongoose.Schema({});

var FactionBasic = mongoose.model('FactionBasic', factionBasicSchema);
var FactionTerritory = mongoose.model('FactionTerritory', factionTerritorySchema);
var FactionChain = mongoose.model('FactionChain', factionChainSchema);
var FactionCurrency = mongoose.model('FactionCurrency', factionCurrencySchema);
var FactionArmory = mongoose.model('FactionArmory', factionArmorySchema);
var FactionStat = mongoose.model('FactionStat', factionStatSchema);

export {
  FactionBasic,
  FactionTerritory,
  FactionChain,
  FactionCurrency,
  FactionArmory,
  FactionStat
}