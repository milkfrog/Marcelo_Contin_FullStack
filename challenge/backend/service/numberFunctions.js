function verifyNumber(value) {
    /**
     * input: integer 
     * output: object
     */
    let array = dividers(value)
    let flag = isPrime(array)
    return {
        "number": value,
        "dividers": array,
        "prime": flag
    }
}

function dividers(value) {
    /**
     * input: integer 
     * output: array
     */
    const number = parseInt(value)
    let arrayDividers = []
    for (let i=1; i <= Math.trunc(number/2); i++){
        if (number%i == 0) {
            arrayDividers.push(i)
        }
    }
    arrayDividers.push(number)
    return arrayDividers
}

function isPrime(array) {
    /**
     * input: array
     * output: boolean
     */
    return !(array.length > 2)
}

module.exports = {verifyNumber}