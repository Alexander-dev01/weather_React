import { memo } from "react"

const OutputImg = (props) => {
  const { img, animBeauty } = props
  return (
    <>
      <img
        src={`images/weather/${img}`}
        alt={img}
        ref={animBeauty}
        className="weather__img-img"
      />
    </>
  )
}
export default memo(OutputImg)
