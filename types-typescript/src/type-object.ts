//Type: object
let user: object;
user = {}; //object

user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
}

console.log('user',user);
//Object vs object (Clase de JS vs tipo de TS)
//console.log('user.username',user.username)

const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
}

const isInstance = myObj instanceof Object; //clase Object de JS
console.log('isInstance', isInstance);
console.log('myObj.username',myObj.username);