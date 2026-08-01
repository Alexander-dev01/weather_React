import Button from "./Button"
import Form from "./Form"
import HeaderFooter from "./HeaderFooter"
import OutputImg from "./OutputImg"
import { WeatherContext } from "../context/WeatherContext"
import { useContext} from "react"

const Weather = () => {
  const { gluing, namePostFetch, animBeauty } = useContext(WeatherContext)
  const { temperature, nameWeather, img } = namePostFetch

  return (
    <>
      <header className="header">
        <div className="container">
          <HeaderFooter hasLogo={true} hasSelect={true} />
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="main-inner">
            <Form temperature={temperature} nameWeather={nameWeather} />

            <div className="weather__img light">
              <OutputImg img={img} animBeauty={animBeauty} />
            </div>
          </div>

          <div className="main__start-button light">
            <Button
              src={"start.png"}
              type={"submit"}
              form={"weather__form"}
              onClick={gluing}
            >
              Узнать погоду!
            </Button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <HeaderFooter hasFooter={true} />
        </div>
      </footer>
    </>
  )
}
export default Weather
