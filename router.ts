import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonsController from './src/controllers/PokemonController';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Typescript!')
})

router.get('/ts', (req, res) => {
    res.send('Typescript es lo máximo!')
})

router.get('/digimons', DigimonsController.getAll);
router.get('/digimons/:id', DigimonsController.get);
router.get('/digimons/name/:name', DigimonsController.getByName);
router.get('/digimons/type/:type', DigimonsController.getByType);
router.get('/digimons/strong/:id1/:id2', DigimonsController.getMoreStrong);
router.get('/digimons/save/:name/:damage/:type/:strongAgainst/:weakAgainst/:img', DigimonsController.saveDigimon);

router.get('/pokemons', PokemonsController.getAll);
router.get('/pokemons/:id', PokemonsController.get);
router.get('/pokemons/name/:name', PokemonsController.getByName);
router.get('/pokemons/type/:type', PokemonsController.getByType);
router.get('/pokemons/strong/:id1/:id2', PokemonsController.getMoreStrong);
router.get('/pokemons/save/:name/:damage/:type/:strongAgainst/:weakAgainst/:img', PokemonsController.saveDigimon);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});
