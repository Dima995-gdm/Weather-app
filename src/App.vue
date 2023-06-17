<template>
    <div class="page">
        <main class="main">
            <div class="container">
                <div class="laptop">
                    <div class="sections">
                        <section class="section section-left">
                            <div class="info">
                                <div class="city-inner">
                                    <input 
                                        type="text" 
                                        class="search" 
                                        v-model="city"
                                        @keydown.enter="getWeather"
                                    />
                                </div>
                                <WeatherSummary :cityWeather = "cityWeather"/>
                            </div>
                        </section>
                        <section class="section section-right">
                            <WeatherHighlights :cityWeather = "cityWeather"/>
                        </section>
                    </div>
                    <div class="sections">
                        <Coords v-if="cityWeather" :coord="cityWeather.coord"/>
                        <Humidity v-if="cityWeather" :humidity="cityWeather.main.humidity"/>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import WeatherSummary from '@/components/WeatherSummary.vue';
import WeatherHighlights from '@/components/WeatherHighlights.vue';
import Coords from '@/components/Coords.vue';
import Humidity from '@/components/Humidity.vue';
import {getCityWeather} from '@/api/axios.js'

export default {
    components: {
        WeatherSummary,
        WeatherHighlights,
        Coords,
        Humidity
    },
    data() {
        return {
            city: 'Paris',
            cityWeather: null,
            error: null
        }
    },
    methods: {
        getWeather() {
            getCityWeather(this.city).then((response) => this.cityWeather = response)
        }
    },
    mounted() {
        this.getWeather()
    }
}
</script>
