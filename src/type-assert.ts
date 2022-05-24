// <tipo> // Angle Bracket Syntax
export {};

let username: any;
username = 'miguel';
username = 'migu';

//tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ?
                        `Welcome ${username}`:
                        `username is too short`;
console.log('message',message);

let usernameWithId: any = 'miguel 1';
//como obtener el username
username = (<string>usernameWithId).substring(0,6)
console.log('username only', username)

//sintaxis "as"
message = (username as string).length > 5 ?
                        `Welcome ${username}`:
                        `username is too short`;

console.log('message as',message);
