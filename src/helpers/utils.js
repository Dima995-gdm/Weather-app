export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {timeZone:'Atlantic/Azores'})
}

export const getPressure = (hpa) => {
    const pressureUnits = 0.750062;
    return Math.round(hpa * pressureUnits)
}

