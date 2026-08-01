import { memo } from "react"

const Logo = (props) => {
  const { logo, alt } = props
  return (
    <>
      <div className="logo">
        <div className="logo__img">
          <img src={`src/images/${logo}`} alt={alt} />
        </div>
        <span className="logo__text">Погода</span>
      </div>
    </>
  )
}
export default memo(Logo)
