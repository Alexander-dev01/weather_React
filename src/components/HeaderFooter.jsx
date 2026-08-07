import { memo, useContext } from "react"
import Button from "./Button"
import Logo from "./Logo"
import Select from "./Select"
import { WeatherContext } from "../context/WeatherContext"
import UseTheme from "../hooks/UseTheme"

const HeaderFooter = (props) => {
  const { hasLogo, hasSelect, hasFooter } = props
  const { setSborDannix, sborDannix } = useContext(WeatherContext)
  const { onClickTheme } = UseTheme()

  return (
    <>
      <div className="headerFooter">
        {hasLogo && <Logo logo="logo.png" alt="logo" />}

        {hasSelect && (
          <div className="header_right">
            <Button src="theme.png" onClick={onClickTheme} />
            <Select setSborDannix={setSborDannix} sborDannix={sborDannix} />
          </div>
        )}

        {hasFooter && (
          <>
            <div className="footer__text">Автор сайта: Александр</div>
            <div className="footer__text">
              <a href="https://github.com/Alexander-dev01" className="link">Мой GitHub</a>
            </div>
          </>
        )}
      </div>
    </>
  )
}
export default memo(HeaderFooter)
