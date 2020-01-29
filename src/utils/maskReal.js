export default function maskReal(float){

    if(typeof float === 'undefined') float = 0;

    return `R$ ${
        parseFloat(float)
        .toFixed(2)
        .replace('.',',')
        .replace(/\d(?=(\d{3})+,)/g, '$&.')
    }`;
}