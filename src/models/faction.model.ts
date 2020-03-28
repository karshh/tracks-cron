import * as mongoose from 'mongoose'

var factionSchema = new mongoose.Schema({
});

var Faction = mongoose.model('faction', factionSchema);

export {
  Faction
}