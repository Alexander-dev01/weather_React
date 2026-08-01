import { memo } from "react"

const Input = (props) => {
  const { value, type, name, setSborDannix, sborDannix } = props
  return (
    <>
      <input
        className="radio "
        type={type}
        name={name}
        value={value}
        id={value}
        checked={sborDannix.dateValue===value}
        onChange={(event) =>
          setSborDannix((prev) => ({ ...prev, dateValue: value }))
        }
      />
    </>
  )
}
export default memo(Input)
