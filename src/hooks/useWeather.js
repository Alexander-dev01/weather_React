import { useEffect, useState } from "react"

const useWeather = () => {
  const [sborDannix, setSborDannix] = useState({
    locationValue: 'moscow', //записан после сбора данных (moscow)
    dateValue: 'segodnya', //записан после сбора данных (segodnya)
  })


  const [currentLatitudeLongitudeTimezone, setCurrentLatitudeLongitudeTimezone] = useState({
    latitude: null, //47.2357
    longitude: null, //39.7015
    timezone: null, //Europe%2FMoscow
    tomorrowDate: null // (22-22-2026)+1
  })

  const [currentWeatherFetch, setCurrentWeatherFetch] = useState({
    dataTemperature: '', //35
    dataTime: '', //22.22.22Ф21:10
    dataWeatherCod: '', //2
  })

  const citiesCoordinates = {
    moscow: {
      latitude: 55.7558,
      longitude: 37.6173,
      timezone: 'Europe%2FMoscow'
    },
    saintPetersburg: {
      latitude: 59.9343,
      longitude: 30.3351,
      timezone: 'Europe%2FMoscow'
    },
    rostovNaDonu: {
      latitude: 47.2357,
      longitude: 39.7015,
      timezone: 'Europe%2FMoscow'
    },
  }

  const weatherCodes = {
    0: 'Ясно',
    1: 'Почти ясно',
    2: 'Переменная облачность',
    3: 'Пасмурно',
    45: 'Туман',
    48: 'Инейный туман',
    51: 'Лёгкая морось',
    53: 'Морось',
    55: 'Сильная морось',
    61: 'Слабый дождь',
    63: 'Дождь',
    65: 'Сильный дождь',
    66: 'Ледяной дождь слабый',
    67: 'Ледяной дождь ',
    71: 'Слабый снег',
    73: 'Снег',
    75: 'Сильный снег',
    77: 'Снег',
    80: 'Слабый ливень',
    81: 'Умеренный ливень',
    82: 'Сильный ливень',
    85: 'Слабый снегопад',
    86: 'Сильный снегопад',
    95: 'Гроза',
    96: 'Гроза с градом',
    99: 'Сильная гроза с градом',
  }

  const weatherImages = {
    0: 'src/images/weather/solnecno.png',
    1: 'src/images/weather/solnecno.png',
    2: 'src/images/weather/pasmurno.png',
    3: 'src/images/weather/pasmurno.png',
    45: 'src/images/weather/tuman.png',
    48: 'src/images/weather/tuman.png',
    51: 'src/images/weather/dojd.png',
    53: 'src/images/weather/dojd.png',
    55: 'src/images/weather/dojd.png',
    61: 'src/images/weather/dojd.png',
    63: 'src/images/weather/dojd.png',
    65: 'src/images/weather/dojd.png',
    66: 'src/images/weather/dozdSneg.png',
    67: 'src/images/weather/dozdSneg.png',
    71: 'src/images/weather/sneg.png',
    73: 'src/images/weather/sneg.png',
    75: 'src/images/weather/sneg.png',
    77: 'src/images/weather/sneg.png',
    80: 'src/images/weather/dojd.png',
    81: 'src/images/weather/dojd.png',
    82: 'src/images/weather/dojd.png',
    85: 'src/images/weather/sneg.png',
    86: 'src/images/weather/sneg.png',
    95: 'src/images/weather/groza.png',
    96: 'src/images/weather/groza.png',
    99: 'src/images/weather/groza.png',
  }

  useEffect(() => {
    console.log('sborDannix', sborDannix);

  }, [sborDannix])

  // НАПОМИНАНИЕ ПЕРЕПИШИ ЧТОБЫ ЧЕРЕЗ SET СРАЗУ ХЕРАЧИЛО А НЕ ПСЕВДОМЕТОДЫ
  const onChangeDate = (value) => {
    setSborDannix((prev) => ({ ...prev, dateValue: value }))
  }
  const onChangeCity = (value) => {
    setSborDannix((prev) => ({ ...prev, locationValue: value }))
  }

  // gluing() {
  //   const tomorrow = new Date();
  //   tomorrow.setDate(tomorrow.getDate() + 1);
  //   const tomorrowDate = tomorrow.toISOString().slice(0, 10);
  //   this.currentLatitudeLongitudeTimezone.tomorrowDate = tomorrowDate


  //   const allLocationArray = Object.entries(this.citiesCoordinates)
  //   allLocationArray.forEach(element => {
  //     if (element[0] === this.notClearWheatherCity.locationValue) {
  //       this.currentLatitudeLongitudeTimezone = {
  //         ...this.currentLatitudeLongitudeTimezone,
  //         ...element[1],
  //       }
  //       console.log('упакованный для отправки this.currentLatitudeLongitudeTimezone', this.currentLatitudeLongitudeTimezone);
  //     }
  //   });
  // }

  return { onChangeCity, onChangeDate, sborDannix }
}

export default useWeather