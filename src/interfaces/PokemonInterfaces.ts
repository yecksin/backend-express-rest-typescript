import { MonsterTypeI } from "./MonsterTypeI";

export interface PokemonI {
    id: number
    name: string
    damage: number
    type: Array<MonsterTypeI>
    img: string
}
