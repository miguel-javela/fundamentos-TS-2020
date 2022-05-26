console.log('hola main jjjj');

//number
//explicito
let phone: number;
phone = 1; 
//inferido
let phoneNumber = 3434343;
//hexadecimal
let hex: number = 0xf00d;
//binario
let binary:number = 0b1010;
//octarl
let octal: number = 0o744;

//boolean
let isPro: boolean;
isPro = true;
//isPro = 1 //error
//inferido
let isUserPro = false;

//String
let username: string = "peña";

//template string
//uso de back-tick `
let userInfo: string;
userInfo = `
    user info:
    username: ${username}
    firstName: ${username + 'aviles'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo',userInfo);