var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var alphabet = "abcdefghijklmnoprstuwxyz".split("");
function aggregateIntoChunks(array) {
    var lenghtOfChunksToGenerate = chunksGenerator(array.length);
    var result = [];
    var copyOfArrayForUseInSplice = __spreadArray([], array);
    lenghtOfChunksToGenerate.forEach(function (value) {
        return result.push(copyOfArrayForUseInSplice.splice(0, value));
    });
    return result;
}
function chunksGenerator(totalLength) {
    if (totalLength <= 3) {
        throw Error("Given lenght must have lenght grater then 3");
    }
    var i = 0;
    var arrayOfChunksLenght = [];
    while (i < totalLength) {
        var generatedNumber = Math.floor(Math.random() * (7 - 4) + 4);
        i += generatedNumber;
        if (i > totalLength) {
            arrayOfChunksLenght.length = 0;
            i = 0;
        }
        else {
            arrayOfChunksLenght.push(generatedNumber);
        }
    }
    return arrayOfChunksLenght;
}
