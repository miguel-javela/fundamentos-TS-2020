//corchetes []

//tipo explicito
let users: string[];
users=['n1','n2'];
// users = [1,true,'test']//error

//tipo inferido
let orherUsers = ['n1','n2'];

//Array<TIPO>

let picturesTitles: Array<string>;
picturesTitles = ['t1','t2'];

//accediendo a los valores de un array
console.log('first user', users[0]);
console.log('first title', picturesTitles[0]);

// propiedades en array
console.log('users.length',users.length);

// uso de funciones
users.push('aPlatziuser');
users.sort();
console.log('users', users)