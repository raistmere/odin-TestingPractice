// This module handles taking in an array of numbers and returns an object
// that will give the: average, min value, max value, length of array of those numbers.
const analyzeArray = (() => {

    const calculate = (array) => {
        let dataObject = {
            average: findAverage(array),
            min: findMin(array),
            max: findMax(array),
            length: array.length,
        }

        return dataObject;
    };

    const findAverage = (array) => {
        const totalValue = array.reduce((total, currentValue) => total + currentValue);
        return (totalValue / array.length);
    };

    const findMin = (array) => {
        const minValue = array.reduce((value, currentValue) => currentValue < value? currentValue : value);
        return minValue;
    };

    const findMax = (array) => {
        const maxValue = array.reduce((value, currentValue) => currentValue > value? currentValue : value);
        return maxValue;
    };

    return{
        calculate
    };

})();

module.exports = analyzeArray;