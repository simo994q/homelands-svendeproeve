export const getMonthString = (month) => {
    switch (month) {
        case 0:
            return 'Januar'
        case 1:
            return 'Februar'
        case 2:
            return 'month'
        case 3:
            return 'month'
        case 4:
            return 'month'
        case 5:
            return 'month'
        case 6:
            return 'month'
        case 7:
            return 'month'
        case 8:
            return 'month'
        case 9:
            return 'month'
        case 10:
            return 'month'
        case 11:
            return 'month'
    }
}

export const getMonthAndYear = (date) => {
    const year = new Date().getFullYear(date)
    const month = getMonthString(new Date().getMonth(date))

    return `${month} ${year}`
}