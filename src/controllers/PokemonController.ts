import { Request, Response } from "express";
import PokemonsService from "../services/PokemonsService";

export function getAll(_: any, res: Response) {
    const pokemons = PokemonsService.getAll();
    res.status(200).json(pokemons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del pokemon."}
        const pokemon = PokemonsService.get(id);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByName(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el name del pokemon."}
        const pokemons = PokemonsService.getByName(name);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByType(req: Request, res: Response) {
    try {
        const type = req.params.type && req.params.type || undefined;
        if(!type){ throw "Se requiere el Tipo del pokemon."}
        const pokemons = PokemonsService.getByType(type);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).send(error);
    }
}


export function getMoreStrong(req: Request, res: Response) {
    try {
        // let resp = req.params.id1 +req.params.id2;
        const id1 = req.params.id1 && +req.params.id1|| undefined;
        const id2 = req.params.id2 && +req.params.id2 || undefined;
        let resp;
        if(!id1 || !id2){ throw "Se requiere el ID del pokemon."}
        let pokemons=[];
        pokemons.push(PokemonsService.get(id1));
        pokemons.push(PokemonsService.get(id2));
        if (PokemonsService.get(id1).damage>PokemonsService.get(id2).damage) {
            resp =
            `
            <h1>${PokemonsService.get(id1).name}(${PokemonsService.get(id1).damage}) VS ${PokemonsService.get(id2).name}(${PokemonsService.get(id2).damage})</h1>
            <img width="200"  src="${PokemonsService.get(id1).img}"> <img width="200"  src="${PokemonsService.get(id2).img}">
            <h3>Ganador: ${PokemonsService.get(id1).name}</h3>
            <img width="200"  src="${PokemonsService.get(id1).img}">
            `;
        }else{
            resp =
            `
            <h1>${PokemonsService.get(id1).name}(${PokemonsService.get(id1).damage}) VS ${PokemonsService.get(id2).name}(${PokemonsService.get(id2).damage})</h1>
            <img width="200"  src="${PokemonsService.get(id1).img}"> <img width="200"  src="${PokemonsService.get(id2).img}">
            <h3>Ganador: ${PokemonsService.get(id2).name}</h3>
            <img width="200"  src="${PokemonsService.get(id2).img}">
            `;
        }
        // const pokemon = PokemonsService.get(id1);
        // const pokemon = PokemonsService.get(id2);
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function savePokemon(req: Request, res: Response) {
    try {
        // let pokemon = req.params.id.split(",") && +req.params.id.split(",")[0] || "null"
        console.log(req.params);
        console.log("json");
        let pokemon = {
           
                id: "",
                name: req.params.name|| "null",
                damage: req.params.damage || "null",
                type: [
                    { "name": req.params.type|| "null", "strongAgainst": [req.params.strongAgainst], "weakAgainst": [req.params.weakAgainst] }
                ],
                img: req.params.img || "null"
            
        }
        
        PokemonsService.savePokemon(pokemon);
        console.log("json: ");
        console.log(pokemon);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}