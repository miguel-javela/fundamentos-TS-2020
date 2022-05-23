//10,'10'
// let idUser1: number|string;
// idUser1 = 10
// idUser1 = '10'

// //buscar username dado un ID
// function getUserNameById(id:number | string){
//     //logica de negocio
//     return 'miguel'
// }
// getUserNameById(20);
// getUserNameById('20');

//alias de tipos: TS
type IdUser = number | string;
type Username = string;
let idUser1: IdUser;
idUser1 = 10
idUser1 = '10'

//buscar username dado un ID
function getUserNameById(id: IdUser): Username{
    //logica de negocio
    return 'miguel'
}
getUserNameById(20);
getUserNameById('20');

//tipos literales
//100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture = SquareSize= '200x200' //error
let smallPicture: SquareSize = '500x500'

