import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonsController from './src/controllers/PokemonController';

export const router = express.Router();


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
router.get('/pokemons/save/:name/:damage/:type/:strongAgainst/:weakAgainst/:img', PokemonsController.savePokemon);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});


router.get('/', (req, res) => {
    res.send(`
    <p
    style="
    font-family: fantasy;
    text-align: center; 
    font-size: 30px;
    height: 100px;
    margin-top: 50px ;
    "
    > En el 
    <a target=”_blank” href="https://github.com/yecksin/backend-express-rest-typescript" >
      
      Repositorio github</a> Se encuentra la documentacion de los parametros
    </p>

    <h1
    style="
    font-family: fantasy;
    text-align: center; 
    font-size: 30px;
    height: 100px;

    "
    >Ejemplo de rutas</h1>

    <div
    style="
    font-family: fantasy;
    text-align: center; 
    font-size: 20px;
    height: 100px;

    "
    >
   <h1 style="color: orange">Digimons</h1>
   <h3>Mostrar todos</h3>
    <a target=”_blank” href="http://localhost:3000/digimons" >http://localhost:3000/digimons</a>
    <h3>Buscar por id</h3>
    <a target=”_blank” href="http://localhost:3000/digimons/1" >http://localhost:3000/digimons/1</a>
    <h3>Buscar por tipo</h3>
    <a target=”_blank” href="http://localhost:3000/digimons/type/va" >http://localhost:3000/digimons/type/va</a>
    <h3>Dice cual es mas fuerte usando códigos</h3>
    <a target=”_blank” href="http://localhost:3000/digimons/strong/1/2" >http://localhost:3000/digimons/strong/1/2</a>
    <h3>Agregar</h3>
    <a target=”_blank” href="http://localhost:3000/digimons/save/Agumon/500/Vacuna/Fuego/Virus/veneno.img" >http://localhost:3000/digimons/save/Agumon/500/Vacuna/Fuego/Virus/veneno.img</a>
   
    <h1 style="color: red" >Pokemons</h1>
    <h3>Mostrar todos</h3>
     <a target=”_blank” href="http://localhost:3000/pokemons" >http://localhost:3000/pokemons</a>
     <h3>Buscar por id</h3>
     <a target=”_blank” href="http://localhost:3000/pokemons/1" >http://localhost:3000/pokemons/1</a>
     <h3>Buscar por tipo</h3>
     <a target=”_blank” href="http://localhost:3000/pokemons/type/fue" >http://localhost:3000/pokemons/type/fue</a>
     <h3>Dice cual es mas fuerte usando códigos</h3>
     <a target=”_blank” href="http://localhost:3000/pokemons/strong/1/2" >http://localhost:3000/pokemons/strong/1/2</a>
     <h3>Agregar</h3>
     <a target=”_blank” href="http://localhost:3000/pokemons/save/Raichu/500/Electrico/Planta/Tierra/Raichu.img" >http://localhost:3000/pokemons/save/Raichu/500/Electrico/Planta/Tierra/Raichu.img</a>
     </div>
   
    </div>




    `

    )
})