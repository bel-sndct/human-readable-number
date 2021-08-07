module.exports = function toReadable (number) {
    //dictionaries
    const primeNumbersArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const enArr = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const numberPostfixesArr = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    //solution
    if (number === 0) {
        return "zero";
    }
    let stringNumber = number.toString();
    let resultString = "";
    switch (stringNumber.length) {
        case 3: {
            resultString += primeNumbersArr[parseInt(stringNumber[0]) - 1];
            resultString += " hundred";
            if (parseInt(stringNumber[1]) === 0 && parseInt(stringNumber[2]) === 0)  {
                break;
            }
            else {
                resultString += " ";
                if (parseInt(stringNumber[1]) !== 0) {
                    if (parseInt(stringNumber[1]) !== 1) {
                        resultString += numberPostfixesArr[parseInt(stringNumber[1]) - 2];
                        if (parseInt(stringNumber[2]) !== 0) {
                            resultString += " ";
                        }
                        else break;
                    }
                    else {
                        resultString += enArr[parseInt(stringNumber[2])];
                        break;
                    }
                }
                resultString += primeNumbersArr[parseInt(stringNumber[2]) - 1];
            }
            break;
        }
        case 2: {
            if (parseInt(stringNumber) >= 10 && parseInt(stringNumber) <= 19) {
                resultString += enArr[parseInt(stringNumber[1])];
            }
            else {
                resultString += numberPostfixesArr[parseInt(stringNumber[0]) - 2];
                if (parseInt(stringNumber[1]) !== 0) {
                    resultString += " ";
                    resultString += primeNumbersArr[parseInt(stringNumber[1]) - 1];
                }
            }
            break;
        }
        case 1: {
            resultString += primeNumbersArr[parseInt(stringNumber[0]) - 1];
            break;
        }
    }
    return resultString;
}
