
import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module PokemonsService { 
    export function getAll(): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        return pokemons
    }
    export function get(id: number): PokemonI {
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.id === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }
    export function getByName(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        const matches: Array<PokemonI> = pokemons.filter(function(el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }
    
    export function getByType(type: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        const matches: Array<PokemonI> = pokemons.filter(function(el) {
            return el.type[0].name.toLowerCase().indexOf(type.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }
    export function getMoreStrong(id: number): PokemonI {
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.id === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }

    export function savePokemon(json: any) {
        console.log(db.length);
        json.id=db.length +1;
        db.push(json);
    }
}

export default PokemonsService;
