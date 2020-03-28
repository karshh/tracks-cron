import * as cron from 'node-cron'
import axios from 'axios'
import { Faction } from '../models/faction.model';

export const factionJob = cron.schedule('00 17 * * * *', async () => {
  let response = await axios.get(`https://api.torn.com/faction/${process.env.PEEPSHOW_FACTION_ID}`, 
  { params: {
    selections: 'basic,territory,chain,currency,weapons,armor,temporary,medical,drugs,boosters,cesium,mainnews,attacknews,fundsnews,armorynews,crimenews,membershipnews,crimes,attacks,revives,upgrades,stats,contributors,donations,chains,timestamp',
    key: process.env.PEEPSHOW_API_KEY
  } });

  if (response.status !== 200 || !!response.data.error) return

  Faction.collection.insertOne(response.data, _ => {
    console.log("Inserted peepshow data into mongo.");
  });
  
}, { })