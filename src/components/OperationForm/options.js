exports.datePickerOptions = {
    autoClose: false,
    container: null,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'ddd, dd mmm yy',
    i18n: {
    cancel: 'Cancelar',
    clear: 'Limpar',
    done: 'Ok',
    months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    monthsShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
    ],
    nextMonth: '›',
    previousMonth: '‹',
    weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    weekdaysAbbrev: [
        'D',
        'S',
        'T',
        'Q',
        'Q',
        'S',
        'S'
    ],
    weekdaysShort: [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
    ]
    },
    isRTL: false,
    maxDate: null,
    minDate: null,
    onClose: null,
    onDraw: null,
    onOpen: null,
    parse: null,
    setDefaultDate: true,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 10
};

exports.selectOptions = {
    classes: 'select',
    dropdownOptions: {
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250
    }
};