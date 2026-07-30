import useWeather from "../hooks/useWeather.js"
import Button from "./Button"
import Logo from "./Logo"
import Select from "./Select"

const HeaderFooter = (props) => {
  const { hasLogo, hasSelect, hasFooter } = props
  const { onChangeCity, sborDannix } = useWeather()

  return (
    <>
      <div className="headerFooter">
        {hasLogo && <Logo logo="logo.png" alt="logo" />}

        {hasSelect && (
          <div className="header_right">
            <Button src="theme.png" />
            <Select onChangeCity={onChangeCity} sborDannix={sborDannix} />
          </div>
        )}

        {hasFooter && <div className="footer__text">Это подвал)</div>}
      </div>
    </>
  )
}
export default HeaderFooter
