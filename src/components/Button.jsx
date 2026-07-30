const Button = (props) => {
  const { src, children, type, form } = props
  return (
    <>
      <button className="button" form={form} >
        <img className="icon" src={`src/images/${src}`} alt="start" />
        {children && <span>{children}</span>}
      </button>
    </>
  )
}
export default Button
