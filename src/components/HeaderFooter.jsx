import { useContext } from "react"
import Button from "./Button"
import Logo from "./Logo"
import Select from "./Select"
import { WeatherContext } from "../context/WeatherContext"

const HeaderFooter = (props) => {
  const { hasLogo, hasSelect, hasFooter } = props
  const { setSborDannix, sborDannix } = useContext(WeatherContext)

  return (
    <>
      <div className="headerFooter">
        {hasLogo && <Logo logo="logo.png" alt="logo" />}

        {hasSelect && (
          <div className="header_right">
            <Button src="theme.png" />
            <Select setSborDannix={setSborDannix} sborDannix={sborDannix} />
          </div>
        )}

        {hasFooter && <div className="footer__text">Это подвал)</div>}
      </div>
    </>
  )
}
export default HeaderFooter
