const Weather = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <div className="logo__img">
                <img src="src/images/logo.png" alt="logo" />
              </div>
              <span className="logo__text">Погода</span>
            </div>

            <div className="header_right">
              <button className="button" data-js-theme>
                <img className="icon" src="src/images/theme.png" alt="start" />
              </button>
              <select
                className="select"
                form="weather__form"
                name="location"
                data-js-location
              >
                <option value="moscow">г. Москва</option>
                <option value="rostovNaDonu">г. Ростов-на-Дону</option>
                <option value="saintPetersburg">г. Санкт-Петербург</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="main-inner">
            <form id="weather__form" className="weather__description light">
              <div className="description__date ">
                <input
                  className="radio "
                  type="radio"
                  name="date"
                  value="segodnya"
                  id="segodnya"
                  readOnly
                />
                <label className="radio__text" htmlFor="segodnya">
                  <img className="icon" src="src/images/data.png" alt="date" />
                  Сегодня
                </label>

                <input
                  className="radio "
                  type="radio"
                  name="date"
                  value="zawtra"
                  id="zawtra"
                />
                <label className="radio__text" htmlFor="zawtra">
                  <img className="icon" src="src/images/data.png" alt="date" />
                  Завтра
                </label>
              </div>

              <div className="description__content light">
                <div className="description__t">
                  <span data-js-temperature>Жми "Узнать погоду!"</span>
                </div>
                <div className="description__name" data-js-weather></div>
              </div>
            </form>

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
          <div className="footer-inner">
            <div className="footer__text">Это подвал)</div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Weather
