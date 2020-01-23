module.exports = function floatToPercentage(float){
    if([NaN, undefined].includes(float)) float = 0;
    return `${(float*100).toFixed(2)}%`;
}