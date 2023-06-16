<template>
    <div class="summary" v-if="cityWeather">
        <div
            :style="`background-image: url('${pathWeatherImage}')`"
            class="pic-main"
        ></div>
        <div class="weather">
            <div class="temp">{{ roundedTemp }} °C</div>
            <div class="weather-desc text-block">{{ cityWeather.weather[0].main }}</div>
        </div>
        <div class="city text-block">Paris, FR</div>
        <div class="date text-block">Thu, March 16, 2023</div>
    </div>
</template>

<script>
export default {
    props: {
        cityWeather: {
            type: Object,
            required: true
        }
    },
    computed: {
        roundedTemp() {
            return Math.round(this.cityWeather.main.temp)
        },
        pathWeatherImage() {
            return `/src/assets/img/weather-main/${this.cityWeather.weather[0].description}.png`
        }
    }
}
</script>
