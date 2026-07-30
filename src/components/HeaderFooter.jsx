import Button from "./Button"
import Logo from "./Logo"
import Select from "./Select"

const HeaderFooter = (props) => {
  const { hasLogo, hasSelect, hasFooter } = props

  return (
    <>
      <div className="headerFooter">
        {hasLogo && <Logo logo="logo.png" alt="logo" />}

        {hasSelect && (
          <div className="header_right">
            <Button src="theme.png" />
            <Select />
          </div>
        )}

        {hasFooter && <div className="footer__text">Это подвал)</div>}
      </div>
    </>
  )
}
export default HeaderFooter
