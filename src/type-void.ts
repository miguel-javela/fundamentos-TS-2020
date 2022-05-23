//void
//tipo explicito
function showInfo (user:any):any{
    console.log('user info', user.id, user.username, user.firstname);
    //return 'hola';
}

showInfo({id:1, username:'migueljavela', firstname: 'miguel'});

//tipo inferido
function showFormattedInfo(user:any){
    console.log('user info',`
        id: ${user.id}
        username:${user.username}
        firstname: ${user.firstname}
    `)
}
showFormattedInfo({id:1, username:'migueljavela', firstname: 'miguel'});

//tipo void, como tipo de dato de una variable
let  unusuable : void;
//unusuable = null;
unusuable = undefined

//tipo: never

function handleError (code: number, message: string):never{
    //process your code
    //generamos un mensaje
    throw new Error(`${message}. code: ${code}`);
}

try{
    handleError(404,"not found");
} catch(error) {

}

//
function sumNumbers(lim:number): never{
    let sum = 0;
    while(true){
        sum++;
    }
}
sumNumbers(10);

console.log('random',Math.random)
