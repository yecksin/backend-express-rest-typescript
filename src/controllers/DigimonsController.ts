import { Request, Response } from "express";
import DigimonsService from "../services/DigimonsService";

export function getAll(_: any, res: Response) {
    const digimons = DigimonsService.getAll();
    res.status(200).json(digimons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.get(id);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByName(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el name del digimon."}
        const digimons = DigimonsService.getByName(name);
        res.status(200).json(digimons);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByType(req: Request, res: Response) {
    try {
        const type = req.params.type && req.params.type || undefined;
        if(!type){ throw "Se requiere el Tipo del digimon."}
        const digimons = DigimonsService.getByType(type);
        res.status(200).json(digimons);
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
        if(!id1 || !id2){ throw "Se requiere el ID del digimon."}
        let digimons=[];
        digimons.push(DigimonsService.get(id1));
        digimons.push(DigimonsService.get(id2));
        if (DigimonsService.get(id1).damage==DigimonsService.get(id2).damage) {
            resp =
            `
            <h1>${DigimonsService.get(id1).name}(${DigimonsService.get(id1).damage}) VS ${DigimonsService.get(id2).name}(${DigimonsService.get(id2).damage})</h1>
            <img width="200"  src="${DigimonsService.get(id1).img}"> <img width="200"  src="${DigimonsService.get(id2).img}">
            <h1 style="color: red;">Empate</h1>
            
            `;
        }else{
            if (DigimonsService.get(id1).damage>DigimonsService.get(id2).damage) {
                resp =
                `
                <h1>${DigimonsService.get(id1).name}(${DigimonsService.get(id1).damage}) VS ${DigimonsService.get(id2).name}(${DigimonsService.get(id2).damage})</h1>
                <img width="200"  src="${DigimonsService.get(id1).img}"> <img width="200"  src="${DigimonsService.get(id2).img}">
                <h3 style="color: blue;">Ganador: ${DigimonsService.get(id1).name}</h3>
                <img width="200"  src="${DigimonsService.get(id1).img}">
                `;
            }else{
                resp =
                `
                <h1>${DigimonsService.get(id1).name}(${DigimonsService.get(id1).damage}) VS ${DigimonsService.get(id2).name}(${DigimonsService.get(id2).damage})</h1>
                <img width="200"  src="${DigimonsService.get(id1).img}"> <img width="200"  src="${DigimonsService.get(id2).img}">
                <h3 style="color: blue;">Ganador: ${DigimonsService.get(id2).name}</h3>
                <img width="200"  src="${DigimonsService.get(id2).img}">
                `;
            }
        }

        // const digimon = DigimonsService.get(id1);
        // const digimon = DigimonsService.get(id2);
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function saveDigimon(req: Request, res: Response) {
    try {
        // let digimon = req.params.id.split(",") && +req.params.id.split(",")[0] || "null"
        console.log(req.params);
        console.log("json");
        let digimon = {
           
                id: "",
                name: req.params.name|| "null",
                damage: req.params.damage || "null",
                type: [
                    { "name": req.params.type|| "null", "strongAgainst": [req.params.strongAgainst], "weakAgainst": [req.params.weakAgainst] }
                ],
                img: req.params.img || "null"
            
        }
        
        DigimonsService.saveDigimon(digimon);
        console.log("json: ");
        console.log(digimon);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
}