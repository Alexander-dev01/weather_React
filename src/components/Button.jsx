const Button = (props) => {
  const { src, children, type, form, gluing } = props
  return (
    <>
      <button className="button" form={form} type={type} onClick={(event)=>gluing(event.preventDefault())}>
        <img className="icon" src={`src/images/${src}`} alt="start" />
        {children && <span>{children}</span>}
      </button>
    </>
  )
}
export default Button
