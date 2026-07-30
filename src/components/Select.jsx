const Select = (props) => {
  const cityData = [
    {
      name: "Москва",
      value: "rostovNaDonu",
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
      <select className="select" form="weather__form" name="location">
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
