import { createContext, useCallback, useMemo, useRef } from "react"
import { useEffect, useState } from "react"

const citiesCoordinates = {
  moscow: {
    latitude: 55.7558,
    longitude: 37.6173,
    timezone: "Europe%2FMoscow",
  },
  saintPetersburg: {
    latitude: 59.9343,
    longitude: 30.3351,
    timezone: "Europe%2FMoscow",
  },
  rostovNaDonu: {
    latitude: 47.2357,
    longitude: 39.7015,
    timezone: "Europe%2FMoscow",
  },
}

const weatherCodes = {
  0: "Ясно",
  1: "Почти ясно",
  2: "Переменная облачность",
  3: "Пасмурно",
  45: "Туман",
  48: "Инейный туман",
  51: "Лёгкая морось",
  53: "Морось",
  55: "Сильная морось",
  56: "Ледяная заморозь слабая",
  57: "Ледяная заморозь слабая",
  61: "Слабый дождь",
  63: "Дождь",
  65: "Сильный дождь",
  66: "Ледяной дождь слабый",
  67: "Ледяной дождь ",
  71: "Слабый снег",
  73: "Снег",
  75: "Сильный снег",
  77: "Снег",
  80: "Слабый ливень",
  81: "Умеренный ливень",
  82: "Сильный ливень",
  85: "Слабый снегопад",
  86: "Сильный снегопад",
  95: "Гроза",
  96: "Гроза с градом",
  99: "Сильная гроза с градом",
}

const weatherImages = {
  0: "solnecno.png",
  1: "solnecno.png",
  2: "pasmurno.png",
  3: "pasmurno.png",
  45: "tuman.png",
  48: "tuman.png",
  51: "dojd.png",
  53: "dojd.png",
  55: "dojd.png",
  56: "dozdSneg.png",
  57: "dozdSneg.png",
  61: "dojd.png",
  63: "dojd.png",
  65: "dojd.png",
  66: "dozdSneg.png",
  67: "dozdSneg.png",
  71: "sneg.png",
  73: "sneg.png",
  75: "sneg.png",
  77: "sneg.png",
  80: "dojd.png",
  81: "dojd.png",
  82: "dojd.png",
  85: "sneg.png",
  86: "sneg.png",
  95: "groza.png",
  96: "groza.png",
  99: "groza.png",
}

export const WeatherContext = createContext(null)

export const Logic = (props) => {
  const { children } = props

  // меняется через интерфейс и считывается в gluing
  const [sborDannix, setSborDannix] = useState({
    locationValue: "moscow",
    dateValue: "segodnya",
  })

  // меняется в gluing и считывается в sending
  const [
    currentLatitudeLongitudeTimezone,
    setCurrentLatitudeLongitudeTimezone,
  ] = useState({
    latitude: null, //47.2357
    longitude: null, //39.7015
    timezone: null, //Europe%2FMoscow
    tomorrowDate: null, // (22-22-2026)+1
  })

  //  меняется в fetch(sending) и считывается в useEffect (отправка на рендеринг)
  const [currentWeatherFetch, setCurrentWeatherFetch] = useState({
    dataTemperature: "", //35
    dataTime: "", //22.22.22Ф21:10
    dataWeatherCod: "", //2
  })

  const [namePostFetch, setNamePostFetch] = useState({
    img: "../logo.png",
    nameWeather: "",
    temperature: 'Жми "Узнать погоду!"',
  })

  // ========================================================================================================================================================================================

  // отправка данных если они есть
  useEffect(() => {
    if (
      currentLatitudeLongitudeTimezone.latitude &&
      currentLatitudeLongitudeTimezone.longitude
    ) {
      console.log(
        "currentLatitudeLongitudeTimezone",
        currentLatitudeLongitudeTimezone,
      )

      sending()
    }
  }, [currentLatitudeLongitudeTimezone])

  // отправляю на рендеринг
  useEffect(() => {
    if (
      currentWeatherFetch.dataWeatherCod !== null &&
      currentWeatherFetch.dataWeatherCod !== undefined &&
      currentWeatherFetch.dataWeatherCod !== ""
    ) {
      console.log("данные от сервера (уже в моем объекте)", currentWeatherFetch)
      const codeWeather = currentWeatherFetch.dataWeatherCod
      const newWeatherGut = {
        temperature: currentWeatherFetch.dataTemperature,
        nameWeather: weatherCodes[codeWeather],
        img: weatherImages[codeWeather],
      }

      setNamePostFetch((prev) => ({ ...prev, ...newWeatherGut }))
    }
  }, [currentWeatherFetch])

  // красивая анимация
  const animBeauty = useRef(null)
  useEffect(() => {
    animBeauty.current.classList.toggle("beauty")
    setTimeout(() => {
      animBeauty.current.classList.toggle("beauty")
    }, 200)
  }, [namePostFetch])

  // вызывется кнопкой
  const gluing = useCallback(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowDate = tomorrow.toISOString().slice(0, 10)
    const cityCoords = citiesCoordinates[sborDannix.locationValue]

    setCurrentLatitudeLongitudeTimezone({
      timezone: cityCoords.timezone,
      longitude: cityCoords.longitude,
      latitude: cityCoords.latitude,
      tomorrowDate: tomorrowDate,
    })
  }, [sborDannix.locationValue])

  // вызывается useEffect`ом от наполненной ширины&долготы
  const sending = () => {
    const urlStart = "https://api.open-meteo.com/v1/forecast?"
    let urlEnd = ""
    if (sborDannix.dateValue == "segodnya") {
      urlEnd = `latitude=${currentLatitudeLongitudeTimezone.latitude}&longitude=${currentLatitudeLongitudeTimezone.longitude}&current=temperature_2m,weather_code&timezone=${currentLatitudeLongitudeTimezone.timezone}`
    } else {
      urlEnd = `latitude=${currentLatitudeLongitudeTimezone.latitude}&longitude=${currentLatitudeLongitudeTimezone.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=${currentLatitudeLongitudeTimezone.timezone}`
    }

    fetch(`${urlStart}${urlEnd}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            response.status === 400
              ? `ошибка ${response.status} - пинайте фронтендера`
              : `ошибка ${response.status}`,
          )
        }
        return response.json()
      })
      .then((json) => {
        console.log("json", json)

        if (sborDannix.dateValue == "segodnya") {
          const temperatureRound = Math.round(json.current.temperature_2m)
          setCurrentWeatherFetch({
            dataTemperature: temperatureRound + "°",
            dataTime: json.current.time,
            dataWeatherCod: json.current.weather_code,
          })
        } else {
          const index = json.daily.time.findIndex(
            (element) =>
              element === currentLatitudeLongitudeTimezone.tomorrowDate,
          )
          let srTemperature =
            (json.daily.temperature_2m_max[index] +
              json.daily.temperature_2m_min[index]) /
            2
          srTemperature = Math.round(srTemperature)
          setCurrentWeatherFetch({
            dataTemperature: srTemperature + "°",
            dataTime: json.daily.time[index],
            dataWeatherCod: json.daily.weather_code[index],
          })
        }
      })
      .catch((error) => {
        // elementTemperature.textContent = error.message
        console.log(error.message)
        setNamePostFetch((prev) => ({ ...prev, temperature: error.message }))
      })
  }

  const value = useMemo(
    () => ({
      sborDannix,
      setSborDannix,
      gluing,
      namePostFetch,
      animBeauty,
    }),
    [sborDannix, setSborDannix, gluing, namePostFetch, animBeauty],
  )

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}
