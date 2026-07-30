const OutputImg = (props) => {
  const { weatherImg } = props
  return (
    <>
      <img
        data-js-image
        src={`src/images/weather/${weatherImg}`}
        alt={weatherImg}
        className="weather__img-img"
      />
    </>
  )
}
export default OutputImg
