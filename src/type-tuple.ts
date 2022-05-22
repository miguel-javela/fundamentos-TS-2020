// el lo usa porque ts le arrojo un error por tener la variable user definida en otro archivo
//y exporto algo vacio para corregirlo
export{}

let user: [number,string];
user = [1,'miguel'];

console.log('user', user);
console.log('username',user[1]);
console.log('username.length',user[1].length);
console.log('id',user[0]);

//tuplas con varios valores
//id,username,ispro
let userInfo: [number,string,boolean];
userInfo = [2,'mjavela',true];
console.log('userinfo',userInfo)

//arreglo de tupas
let array: [number, string][] = [];
array.push([1,'a1']);
array.push([2,'a2']);
array.push([3,'a3']);
console.log('array',array);

//uso de funcionres array
//a3 -> a3001
array[2][1] = array[2][1].concat('001');
console.log('array',array);

