import useWeather from "../hooks/useWeather.js"
import Input from "./Input"
import Label from "./Label"

const Form = (props) => {
  const { onChangeDate, sborDannix } = useWeather()

  const temperature = 'Жми "Узнать погоду!"'
  const name = ""

  return (
    <>
      <form id="weather__form" className="weather__description light">
        <div className="description__date ">
          <Input
            value={"segodnya"}
            type={"radio"}
            name={"date"}
            onChangeDate={onChangeDate}
            sborDannix={sborDannix}
          />
          <Label htmlFor={"segodnya"}>Сегодня</Label>

          <Input
            value={"zawtra"}
            type={"radio"}
            name={"date"}
            onChangeDate={onChangeDate}
            sborDannix={sborDannix}
          />
          <Label htmlFor={"zawtra"}>Завтра</Label>
        </div>

        <div className="description__content light">
          <div className="description__t">
            <span data-js-temperature>{temperature}</span>
          </div>
          <div className="description__name">{name}</div>
        </div>
      </form>
    </>
  )
}
export default Form
