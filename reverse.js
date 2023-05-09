function reverse (arg){
    const array = [];
    let reversedArray = [];
    let reveredString = ''
    for(let i = 0 ; i < arg.length ; i ++){
        array[i] = arg[i]
    };
    reversedArray = array.reverse();
    for(let i = 0 ; i < reversedArray.length ; i++){
        reveredString = reveredString + reversedArray[i]
    }
    return reveredString;
}

module.exports = reverse;