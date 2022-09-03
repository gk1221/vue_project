<template>

  <div id="weather" :class="weather.main && weather.main.temp > 16 ? 'warm' : ''">
    <div class="container">
      <!-- search bar -->
      <div class="search-box">
          <input
            type="text"
            class="search-bar"
            placeholder="Search....."
            v-model="query"
            @keyup.enter="fetchWeather"
          />
      </div>

      <div class="weather-wrap" v-if="weather.main">
          <div class="location-box">
            <div class="location">{{ weather.name }} / {{weather.sys.country}}</div>
            <div class="date">{{currentDate}}</div>
          </div>
          <div class="weather-box">
            <div class="temperature">{{ Math.round(weather.main.temp*10)/10 }}°C</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
            <div class="weatherdes">{{ weather.weather[0].description }}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/weather.css"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
dayjs.extend(advancedFormat);

export default {
  name: 'App',
  data() {
    return {
      api_key: process.env.VUE_APP_WEATHER_KEY,
      base_url: 'https://api.openweathermap.org/data/2.5/',
      query: 'Taipei',
      weather: {},
      date: ''
    }
  },
   methods: {
    async fetchWeather() {
      const data = await fetch(`${this.base_url}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
      this.weather = await data.json()
      console.log(this.weather);
    }

    
  },
  created() {
    this.fetchWeather()
  },
  computed: {
    currentDate() {
      return dayjs().format(`MMMM Do YYYY`)
    },
},

}


</script>

