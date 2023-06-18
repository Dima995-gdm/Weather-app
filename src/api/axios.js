import axios from 'axios'

const API_KEY = 'bda48e603cfe6cd5cff1768dbd035bc8';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather'

export const getCityWeather = async (city) => {
    const response = await axios.get(`?q=${city}&units=metric&appid=${API_KEY}`)
    return response.data
}

