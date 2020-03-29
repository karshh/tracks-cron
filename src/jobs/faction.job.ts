import * as cron from 'node-cron'
import axios from 'axios'
import { FactionBasic, FactionTerritory, FactionChain, FactionCurrency, FactionArmory, FactionStat } from '../models/faction.model';

export const factionJob = cron.schedule('00 27 * * * *', async () => {

  let factionData = [
    { id: process.env.PEEPSHOW_FACTION_ID, name: 'Peepshow', api_key: process.env.PEEPSHOW_API_KEY },
    { id: process.env.RAILROAD_FACTION_ID, name: 'Railroad', api_key: process.env.RAILROAD_API_KEY }
  ];


  for (let value of factionData) {
    console.log(`Running ${value.name} cron.`);
    let response = await axios.get(`https://api.torn.com/faction/${value.id}`,
      {
        params: {
          selections: 'basic,territory,chain,currency,weapons,armor,temporary,medical,stats',
          key: value.api_key
        }
      });

    if (response.status !== 200 || !!response.data.error) {
      console.log(`ERROR Status ${response.status}: ${JSON.stringify(response.data.error)}`);
    }

    let basicData = {
      "ID": response.data["ID"],
      "name": response.data["name"],
      "leader": response.data["leader"],
      "co-leader": response.data["co-leader"],
      "respect": response.data["respect"],
      "age": response.data["age"],
      "best_chain": response.data["best_chain"],
      "territory_wars": response.data["territory_wars"],
      "raid_wars": response.data["raid_wars"],
      "peace": response.data["peace"],
      "members": response.data["members"],
    }

    FactionBasic.collection.insertOne(basicData, _ => {
      console.log(`Inserted ${value.name} basic data into mongo.`);
    });


    let territoryData = {
      "ID": response.data["ID"],
      "territory": response.data["territory"]
    };
    FactionTerritory.collection.insertOne(territoryData, _ => {
      console.log(`Inserted ${value.name} territory data into mongo.`);
    })

    let chainData = {
      "ID": response.data["ID"],
      "chain": response.data["chain"]
    }
    FactionChain.collection.insertOne(chainData, _ => {
      console.log(`Inserted ${value.name} chain data into mongo.`);
    });

    let currencyData = {
      "ID": response.data["ID"],
      "points": response.data["points"],
      "money": response.data["money"]
    }
    FactionCurrency.collection.insertOne(currencyData, _ => {
      console.log(`Inserted ${value.name} currency data into mongo.`);
    });

    let armoryData = {
      "ID": response.data["ID"],
      "weapons": response.data["weapons"],
      "armor": response.data["armor"],
      "temporary": response.data["temporary"],
      "medical": response.data["medical"],
      "drugs": response.data["drugs"],
      "boosters": response.data["boosters"],
    }

    FactionArmory.collection.insertOne(armoryData, _ => {
      console.log(`Inserted ${value.name} armory data into mongo.`);
    });

    let statData = {
      "ID": response.data["ID"],
      "stats": response.data["stats"]
    }

    FactionStat.collection.insertOne(statData, _ => {
      console.log(`Inserted ${value.name} stats data into mongo.`);
    });

  }
});