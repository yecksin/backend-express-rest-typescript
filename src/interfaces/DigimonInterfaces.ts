import { MonsterTypeI } from "./MonsterTypeI";

export interface DigimonI {
    id: number
    name: string
    damage:number
    type: Array<MonsterTypeI>
    img: string
}
