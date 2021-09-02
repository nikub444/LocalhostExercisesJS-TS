const alphabet = "abcdefghijklmnoprstuwxyz".split("");

function aggregateIntoChunks(
    array: Array<string>
  ): Array<Array<string>> {
    const lenghtOfChunksToGenerate = chunksGenerator(array.length);
    const result: Array<Array<string>> = [];
    const copyOfArrayForUseInSplice = [...array];
    lenghtOfChunksToGenerate.forEach((value) =>
      result.push(copyOfArrayForUseInSplice.splice(0, value))
    );
    return result;
  }

  function chunksGenerator(totalLength: number): Array<number> {
    if (totalLength <= 3) {
      throw Error("Given lenght must have lenght grater then 3");
    }
    let i = 0;
    const arrayOfChunksLenght = [];
    while (i < totalLength) {
      let generatedNumber = Math.floor(Math.random() * (7 - 4) + 4);
      i += generatedNumber;
      if (i > totalLength) {
        arrayOfChunksLenght.length = 0;
        i = 0;
      } else {
        arrayOfChunksLenght.push(generatedNumber);
      }
    }
    return arrayOfChunksLenght;
  }