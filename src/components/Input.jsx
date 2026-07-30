const Input = (props) => {
  const { value, type, name, onChangeDate,sborDannix } = props
  return (
    <>
      <input
        className="radio "
        type={type}
        name={name}
        value={sborDannix}
        id={value}
        onChange={(event) => onChangeDate(value)}
      />
    </>
  )
}
export default Input
