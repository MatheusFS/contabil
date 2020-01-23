module.exports = function floatToReal(float){
    if(typeof float === 'undefined') float = 0;
    return `R$${float.toFixed(2).replace('.',',').replace(/\d(?=(\d{3})+,)/g, '$&.')}`;
}