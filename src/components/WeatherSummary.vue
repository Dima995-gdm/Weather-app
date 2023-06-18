<template>
    <div class="summary">
        <div
            :style="`background-image: url('${pathWeatherImage}')`"
            class="pic-main"
        ></div>
        <div class="weather">
            <div class="temp">{{ roundedTemp }} °C</div>
            <div class="weather-desc text-block">{{ cityWeather.weather[0].main }}</div>
        </div>
        <div class="city text-block">{{ cityWeather.name }}, {{ cityWeather.sys.country }}</div>
        <div class="date text-block">{{ getDate }}</div>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: {
        cityWeather: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const roundedTemp = computed(() => Math.round(props.cityWeather.main.temp));
        const pathWeatherImage = computed(() => {
            return `/src/assets/img/weather-main/${props.cityWeather.weather[0].description}.png`
        });
        const getDate = computed(() => {
            return new Date().toLocaleString('en-US', {
                year: 'numeric',
                weekday: 'short',
                month: 'long',
                day: 'numeric',
            })
        });

        return {
            roundedTemp,
            pathWeatherImage,
            getDate
        }
    }
}
</script>
