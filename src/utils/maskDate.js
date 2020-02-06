export default function maskDate(date, format = 'd M Y (day)'){

    date = new Date(date);
    
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    const day = days[date.getDay()];
    const d = `0${date.getDate()}`.slice(-2);
    const M = months[date.getMonth()];
    const m = date.getMonth()+1;
    const y = date.getYear()-100;
    const Y = date.getFullYear();

    const formatted = format
    .replace(/\bd\b/g, d)
    .replace(/\bM\b/g, M)
    .replace(/\bm\b/g, m)
    .replace(/\by\b/g, y)
    .replace(/\bY\b/g, Y)
    .replace(/\bday\b/g, day)
    
    return formatted;
}