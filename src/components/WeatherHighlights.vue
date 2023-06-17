<template>
    <div class="section highlights" v-if="cityWeather">
        <div class="title">Today's Highlights</div>
        <div class="highlights-wrapper">
            <div class="highlight">
                <div class="card">
                    <div class="card-title">Wind</div>
                    <div class="card-pic card-pic--wind"></div>
                    <div class="card-info">
                        <div class="card-justify">
                            <div class="info-main">
                                <div class="info-main-num">{{ cityWeather.wind.speed.toFixed(1) }}</div>
                                <div class="info-main-text">m/s</div>
                            </div>
                            <div class="info-main">
                                <div class="info-main-num">{{ cityWeather.wind.deg }}</div>
                                <div class="info-main-text">deg</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-small">
                    <div class="card-small-title">Wind gusts</div>
                    <div class="card-small-info">
                        <div class="card-small-data" v-if="cityWeather.wind.gust">
                            <div class="info-main-num">{{ cityWeather.wind.gust.toFixed(1) }}</div>
                            <div class="info-main-text">m/s</div>
                        </div>
                        <div class="card-small-hint">
                            <div class="card-small-pic card-small-pic--wind"></div>
                            <div class="card-small-text text-egorova">
                                Learn
                                <a
                                    href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                                    target="_blank"
                                    >more</a
                                >
                                about gusts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight">
                <div class="card">
                    <div class="card-title">Pressure</div>
                    <div class="card-pic card-pic--pressure"></div>
                    <div class="card-info">
                        <div class="card-centered">
                            <div class="info-main">
                                <div class="info-main-num">{{ pressure }}</div>
                                <div class="info-main-text">mm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-small">
                    <div class="card-small-title">Feels like</div>
                    <div class="card-small-info">
                        <div class="card-small-data">
                            <div class="info-main-num">{{ Math.round(cityWeather.main.feels_like) }}</div>
                            <div class="info-main-text">°C</div>
                        </div>
                        <div class="card-small-hint">
                            <div
                                class="card-small-pic card-small-pic--margin card-small-pic--pressure"
                            ></div>
                            <div class="card-small-text">How hot or cold it really feels</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight">
                <div class="card">
                    <div class="card-title">Sunrise and sunset</div>
                    <div class="card-pic card-pic--sun"></div>
                    <div class="card-info">
                        <div class="states">
                            <div class="state">
                                <div class="state-pic"></div>
                                <div class="state-title">Sunrise</div>
                                <div class="state-time">{{ sunriseTime }}</div>
                            </div>
                            <div class="state">
                                <div class="state-pic state-pic--flipped"></div>
                                <div class="state-title">Sunset</div>
                                <div class="state-time">{{ sunsetTime }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-small">
                    <div class="card-small-title">Cloudiness</div>
                    <div class="card-small-info">
                        <div class="card-small-data">
                            <div class="info-main-num">{{ cityWeather.clouds.all }}</div>
                            <div class="info-main-text">%</div>
                        </div>
                        <div class="card-small-hint">
                            <div class="card-small-pic card-small-pic--sun"></div>
                            <div class="card-small-text">The sky fraction obscured by clouds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTime, getPressure } from '@/helpers/utils'

export default {
    props: {
        cityWeather: {
            type: Object,
            required: true
        }
    },
    computed: {
        timezone() {
            return this.cityWeather.timezone
        },
        sunriseTime() {
            return getTime(this.cityWeather.sys.sunrise + this.timezone)
        },
        sunsetTime() {
            return getTime(this.cityWeather.sys.sunset + this.timezone)
        },
        pressure() {
            return getPressure(this.cityWeather.main.pressure)
        }

    }
}
</script>
