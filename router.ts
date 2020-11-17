import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';

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
router.get('/digimons/strong/:id', DigimonsController.getMoreStrong);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});
