<template>
    <div class="page">
        <main class="main">
            <div class="container">
                <div class="laptop" v-if="cityWeather">
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
                                <div class="error" v-if="error">{{ error.message }}</div>
                                <WeatherSummary :cityWeather = "cityWeather"/>
                            </div>
                        </section>
                        <section class="section section-right">
                            <WeatherHighlights :cityWeather = "cityWeather"/>
                        </section>
                    </div>
                    <div class="sections">
                        <Coords :coord="cityWeather.coord"/>
                        <Humidity :humidity="cityWeather.main.humidity"/>
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
import { ref, onMounted } from 'vue';

export default {
    components: {
        WeatherSummary,
        WeatherHighlights,
        Coords,
        Humidity
    },
    setup() {
        const city = ref('Paris');
        const cityWeather = ref();
        const error = ref();

        const getWeather = () => {
            getCityWeather(city.value)
            .then((response) => {
                cityWeather.value = response
                error.value = null
            })
            .catch((result) => {
                error.value = result.response.data
                console.log(error.value);
            })
        }

        onMounted(() => {
            getWeather()
        })

        return {
            city,
            cityWeather,
            error,
            getWeather
        }
    }
}
</script>
