export default function unmaskReal(value){

    const number = value.includes('R$ ') ? value.split(' ')[1] : value;
    return parseInt(`${number}`.replace(/[,.]/g,''))/100;
}