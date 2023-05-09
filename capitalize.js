function capitalizing (arg) {
    let insertV = arg;
    let insertArguement = arg.charAt(0).toUpperCase();
    let middleValue = '';
    for(let i = 1 ; i < insertV.length ; i++){
        middleValue = middleValue + insertV[i]
    }
    return insertArguement+middleValue;
}

module.exports= capitalizing;