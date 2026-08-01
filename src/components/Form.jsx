import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import Input from "./Input"
import Label from "./Label"

const Form = (props) => {
  const { setSborDannix, sborDannix } = useContext(WeatherContext)
  const { temperature, nameWeather } = props

  const name = ""

  return (
    <>
      <form id="weather__form" className="weather__description light">
        <div className="description__date ">
          <Input
            value={"segodnya"}
            type={"radio"}
            name={"date"}
            setSborDannix={setSborDannix}
            sborDannix={sborDannix}
          />
          <Label htmlFor={"segodnya"}>Сегодня</Label>

          <Input
            value={"zawtra"}
            type={"radio"}
            name={"date"}
            setSborDannix={setSborDannix}
            sborDannix={sborDannix}
          />
          <Label htmlFor={"zawtra"}>Завтра</Label>
        </div>

        <div className="description__content light">
          <div className="description__t">
            <span data-js-temperature>{temperature}</span>
          </div>
          <div className="description__name">{nameWeather}</div>
        </div>
      </form>
    </>
  )
}
export default Form
