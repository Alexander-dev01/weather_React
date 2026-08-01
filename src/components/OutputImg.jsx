const OutputImg = (props) => {
  const { img } = props
  return (
    <>
      <img
        data-js-image
        src={`src/images/weather/${img}`}
        alt={img}
        className="weather__img-img"
      />
    </>
  )
}
export default OutputImg
