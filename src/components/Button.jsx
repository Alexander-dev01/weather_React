const Button = (props) => {
  const { src, text } = props
  return (
    <>
      <button className="button">
        <img className="icon" src={`src/images/${src}`} alt="start" />
      </button>
    </>
  )
}
export default Button
