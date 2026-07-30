const Select = (props) => {
  const { onChangeCity,  sborDannix } = props
  const cityData = [
    {
      name: "Москва",
      value: "moscow",
    },
    {
      name: "Ростов-на-Дону",
      value: "rostovNaDonu",
    },
    {
      name: "Санкт-Петербург",
      value: "saintPetersburg",
    },
  ]
  return (
    <>
      <select
        className="select"
        form="weather__form"
        name="location"
        onChange={(event) => onChangeCity(event.target.value)}
        value={sborDannix}
      >
        {cityData.map((element, index) => {
          return (
            <option value={element.value} key={index}>
              г. {element.name}
            </option>
          )
        })}
      </select>
    </>
  )
}
export default Select
