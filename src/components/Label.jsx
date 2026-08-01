import { memo } from "react"

const Label = (props) => {
  const { htmlFor, children } = props
  return (
    <>
      <label className="radio__text" htmlFor={htmlFor}>
        <img className="icon" src="src/images/data.png" alt="date" />
        {children}
      </label>
    </>
  )
}
export default memo(Label)
