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
                            <WeatherHighlights/>
                        </section>
                    </div>
                    <div class="sections">
                        <section class="section-bottom">
                            <div class="block-bottom">
                                <div class="block-bottom-inner">
                                    <div class="block-bottom-pic pic-coords"></div>
                                    <div class="block-bottom-texts">
                                        <div class="block-bottom-text-block">
                                            <div class="block-bottom-text-block-title">
                                                Longitude: 2.3488
                                            </div>
                                            <div class="block-bottom-text-block-desc">
                                                Longitude measures distance east or west of the
                                                prime meridian.
                                            </div>
                                        </div>
                                        <div class="block-bottom-text-block">
                                            <div class="block-bottom-text-block-title">
                                                Latitude: 48.8534
                                            </div>
                                            <div class="block-bottom-text-block-desc">
                                                Latitude lines start at the equator (0 degrees
                                                latitude) and run east and west, parallel to the
                                                equator.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="section-bottom">
                            <div class="block-bottom">
                                <div class="block-bottom-inner">
                                    <div class="block-bottom-pic pic-humidity"></div>
                                    <div class="block-bottom-texts">
                                        <div class="block-bottom-text-block">
                                            <div class="block-bottom-text-block-title">
                                                Humidity: 60 %
                                            </div>
                                            <div class="block-bottom-text-block-desc">
                                                Humidity is the concentration of water vapor present
                                                in the air. Water vapor, the gaseous state of water,
                                                is generally invisible to the human eye.
                                                <br /><br />
                                                The same amount of water vapor results in higher
                                                relative humidity in cool air than warm air.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import WeatherSummary from '@/components/WeatherSummary.vue';
import WeatherHighlights from '@/components/WeatherHighlights.vue';
import {getCityWeather} from '@/api/axios.js'
import axios from 'axios'

export default {
    components: {
        WeatherSummary,
        WeatherHighlights
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
