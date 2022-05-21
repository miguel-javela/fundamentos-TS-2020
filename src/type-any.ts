//tipo explicito
let idUser: any;
idUser = 1;
idUser = '1';
console.log('idUser',idUser);


//tipo inferido, any
let otherId;
otherId = 2
otherId = '2'
//otherId = true; tambien aplica
console.log('otherId',otherId);

let surprise: any = 'hello TS';

const res = surprise.substring(6);
console.log('res',res);
