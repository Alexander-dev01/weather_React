import Form from "./form"
import HeaderFooter from "./HeaderFooter"

const Weather = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <HeaderFooter hasLogo={true} hasSelect={true} />
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="main-inner">
           <Form/>

            <div className="weather__img light">
              <img
                data-js-image
                src="src/images/weather/empty.png"
                alt=""
                className="weather__img-img"
              />
            </div>
          </div>

          <div className="main__start-button light">
            <button
              className="button"
              type="submit"
              form="weather__form"
              data-js-submit
            >
              <span className="button__icon">
                <img className="icon" src="src/images/start.png" alt="start" />
              </span>
              <span>Узнать погоду!</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <HeaderFooter hasFooter={true} />
        </div>
      </footer>
    </>
  )
}
export default Weather
