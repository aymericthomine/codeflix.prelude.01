function splice(str = '', start, deleteCountopt = str.length - start, toAddopt = ''){
    
    return str
}


console.log(splice('Tony Tony Ch0pper', 0, 10));
// => 'Ch0pper'
console.log(splice('Tony Ch0pper', 0, 4, 'Tony Tony'));
// => 'Tony Tony Ch0pper'
console.log(splice('Tony Tony Usopp', -5, 5, 'Ch0pper'));
// => 'Tony Tony Ch0pper'