//explicite
let nullVariable: null;
nullVariable = null;
// nullVariable = 1//error

let otherVariable = null; //sino le ponemos el tipo null lo toma como any
// otherVariable = 'test';

console.log('nullVariable',nullVariable)
console.log('otherVariable',otherVariable)

//undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'//error

let otherUndefined = undefined;//sino le ponemos el tipo null lo toma como any
// otherUndefined = 1;

console.log('undefinedVariable',undefinedVariable)
console.log('otherUndefined',otherUndefined)

//null y undefined: como subtipos
let albumName: string;
// albumName = null;
// albumName = undefined;