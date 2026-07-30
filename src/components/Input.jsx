const Input = (props) => {
  const {value,type,name}=props
  return (
    <>
      <input
        className="radio "
        type={type}
        name={name}
        value={value}
        id={value}
        readOnly
      />
    </>
  )
}
export default Input
