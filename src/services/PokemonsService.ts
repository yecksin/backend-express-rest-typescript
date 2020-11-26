
import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module DigimonsService { 
    export function getAll(): Array<PokemonI> {
        const digimons: Array<PokemonI> = db;
        return digimons
    }
    export function get(id: number): PokemonI {
        const digimons: Array<PokemonI> = db;
        const digimon: Array<PokemonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
    export function getByName(name: string): Array<PokemonI> {
        const digimons: Array<PokemonI> = db;
        const matches: Array<PokemonI> = digimons.filter(function(el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el digimon"
        }
        return matches;
    }
    
    export function getByType(type: string): Array<PokemonI> {
        const digimons: Array<PokemonI> = db;
        let matches: Array<PokemonI> = [];
        digimons.forEach(digimon => {
            const found = digimon.type.filter(e => e.name === type);
            if (found.length>0) {
                matches.push(digimon);
            }
        })
         
        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }
    export function getMoreStrong(id: number): PokemonI {
        const digimons: Array<PokemonI> = db;
        const digimon: Array<PokemonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }

    export function savePokemon(json: any) {
        console.log(db.length);
        json.id=db.length +1;
        db.push(json);
    }
}

export default DigimonsService;
