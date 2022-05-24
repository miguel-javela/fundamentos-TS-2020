// crear una fotografia
// function createPicture(title, date, size){

// }
export {}
type SquareSize = '100x100' | '500x500' | '1000x1000'

//usamos TS, definimos tipos para parametros
// function createPicture(title: string, date:string, size:SquareSize){
//     console.log('create picture using', title, date, size)
// }

// createPicture('t1','2020-03-10','100x100');
// createPicture('t1','2020-03');

//parametros opciones en funciones
function createPicture(title?: string, date?:string, size?:SquareSize){
    console.log('create picture using', title, date, size)
}
createPicture('t1','2020-03-10','100x100');
createPicture('t1','2020-03');
createPicture('t1');
createPicture();

//flat array function
let createPic = (title: string, date:string, size:SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // }
    return {title,date,size}
}

const picture = createPic('t3','2020-03-10', '100x100');
console.log('picture',picture)