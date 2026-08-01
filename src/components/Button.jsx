const Button = (props) => {
  const { src, children, type, form, onClick} = props
  return (
    <>
      <button className="button" form={form} type={type} onClick={(event)=>onClick(event.preventDefault())}>
        <img className="icon" src={`src/images/${src}`} alt="start" />
        {children && <span>{children}</span>}
      </button>
    </>
  )
}
export default Button
