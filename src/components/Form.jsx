import Input from "./input"
import Label from "./label"

const Form = (props) => {
  return (
    <>
      <form id="weather__form" className="weather__description light">
        <div className="description__date ">
          <Input value={"segodnya"} type={"radio"} name={"date"} />
          <Label htmlFor={"segodnya"}>Сегодня</Label>


          <Input value={"zawtra"} type={"radio"} name={"date"} />
          <label className="radio__text" htmlFor="zawtra">
            <img className="icon" src="src/images/data.png" alt="date" />
            Завтра
          </label>
          <Label htmlFor={"zawtra"}>Завтра</Label>
        </div>

        <div className="description__content light">
          <div className="description__t">
            <span data-js-temperature>Жми "Узнать погоду!"</span>
          </div>
          <div className="description__name" data-js-weather></div>
        </div>
      </form>
    </>
  )
}
export default Form
