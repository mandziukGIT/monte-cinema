export const getDaysAhead = () => {
    let today = new Date()
    const dateArray =  [];
    const targetDate = increaseDays (today, 6);
    while (today < targetDate) {
        dateArray.push(today);
        today = increaseDays(today, 1);
    }
    return dateArray;
}

function increaseDays (date, days) {
    const d = new Date(date.valueOf());
    d.setDate(date.getDate() + days);
    return d;
  }

export const getDayName = (date, length) => {
    return date.toLocaleDateString('en-US', {weekday: length})
}

export const getFormattedDate = (date) => {
    const day = ('0' + date.getDate()).slice(-2)
    const month = ('0' + (Number(date.getMonth()) + 1)).slice(-2)
    const year = date.getFullYear()
    return day + '-' + month + '-' + year
}

export const formatMovieLength = (movieLength) => {
    const hours = Math.floor(movieLength / 60);  
    const minutes = String('0' + (movieLength % 60)).slice(-2) + ' min'
    return hours + ":" + minutes
}
