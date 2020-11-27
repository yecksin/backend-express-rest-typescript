import { DigimonI } from "../interfaces/DigimonInterfaces";
const db = require('../db/Digimons.json');

module DigimonsService { 
    export function getAll(): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        return digimons
    }
    export function get(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
    export function getByName(name: string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        const matches: Array<DigimonI> = digimons.filter(function(el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el digimon"
        }
        return matches;
    }
    
    export function getByType(type: string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        const matches: Array<DigimonI> = digimons.filter(function(el) {
            return el.type[0].name.toLowerCase().indexOf(type.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el digimon"
        }
        return matches;
    }
    export function getMoreStrong(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }

    export function saveDigimon(json: any) {
        console.log(db.length);
        json.id=db.length +1;
        db.push(json);
    }
}

export default DigimonsService;
