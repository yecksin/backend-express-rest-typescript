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
        const id1 = req.params.id.split(",")[0] && +req.params.id.split(",")[0] || undefined;
        const id2 = req.params.id.split(",")[1] && +req.params.id.split(",")[1] || undefined;
        let resp;
        if(!id1 || !id2){ throw "Se requiere el ID del digimon."}
        let digimons=[];
        digimons.push(DigimonsService.get(id1));
        digimons.push(DigimonsService.get(id2));
        if (DigimonsService.get(id1).damage>DigimonsService.get(id2).damage) {
            resp =
            `
            <h1>${DigimonsService.get(id1).name}(${DigimonsService.get(id1).damage}) VS ${DigimonsService.get(id2).name}(${DigimonsService.get(id2).damage})</h1>
            <h3>Ganador: ${DigimonsService.get(id1).name}</h3>
            `;
        }else{
            resp =
            `
            <h1>${DigimonsService.get(id1).name}(${DigimonsService.get(id1).damage}) VS ${DigimonsService.get(id2).name}(${DigimonsService.get(id2).damage})</h1>
            <h3>Ganador: ${DigimonsService.get(id2).name}</h3>
            `;
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
        console.log(req.params.digimon);
       let separate:any = req.params.digimon.split(",")
        let digimon = {
           
                id: "",
                name: separate[0] || "null",
                damage: separate[1] || "null",
                type: [
                    { "name": separate[2] || "null", "strongAgainst": [], "weakAgainst": [] }
                ],
                img: separate[3] || "null"
            
        }
        

        let gola=
        {
            "id": 2,
            "name": "Gatomón",
            "damage":200,
            "type": [
                { "name": "Vacuna", "strongAgainst": [], "weakAgainst": [] }
            ],
            "img": "https://vignette.wikia.nocookie.net/tu-digimon/images/e/e4/Gatomon.gif/revision/latest/scale-to-width-down/300?cb=20130127193244&path-prefix=es"
        }


        DigimonsService.saveDigimon(digimon);
        console.log("json: ");
        console.log(digimon);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
}