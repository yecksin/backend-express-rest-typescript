## Servicio para consultar por nombre (puedo no ponerlo completo y puedo no usar tilde)
## Servicio para consultar por tipo
## Servicio para consultar si un digimón/pokemón es fuerte o débil contra otro
 Se comparan los digimón con sus id
 - Orden de parametros de ruta: http://localhost:3000/digimons/strong/:id1/:id2
 - Ejemplo 2: http://localhost:3000/digimons/strong/1/2
## Servicio para crear un nuevo digimon/pokemón (que estará creado en memoria, no debe persistir aún)
 Entran 6 parametros que se separan por (/) despues del save
 - Orden de parametros de ruta: http://localhost:3000/digimons/save/:name/:damage/:type/:strongAgainst/:weakAgainst/:img
 - Ejemplo 2: http://localhost:3000/digimons/save/Agumon/500/Vacuna/Fuego/Virus/veneno.img
