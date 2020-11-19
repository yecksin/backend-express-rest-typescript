## Servicio para consultar por nombre (puedo no ponerlo completo y puedo no usar tilde)
## Servicio para consultar por tipo
## Servicio para consultar si un digimón/pokemón es fuerte o débil contra otro
 Se comparan los digimón con sus id
 - Ejemplo: http://localhost:3000/digimons/strong/5,1
## Servicio para crear un nuevo digimon/pokemón (que estará creado en memoria, no debe persistir aún)
 /digimons/save/:digimon  
 Entran 4 parametros que se separan por (,)
 - Ejemplo: http://localhost:3000/digimons/save/name,damage,type,img
 - Ejemplo: http://localhost:3000/digimons/save/Agumon,500,veneno,img
