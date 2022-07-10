function ToDigitsMinutes(minutes) {
    if (minutes < 10) {
        return `0${minutes}`
    } else {
        return minutes
    }
}

export default ToDigitsMinutes;