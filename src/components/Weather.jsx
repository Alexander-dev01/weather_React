import Button from "./Button"
import Form from "./Form"
import HeaderFooter from "./HeaderFooter"
import OutputImg from "./OutputImg"


const Weather = () => {
  const weatherImg = "empty.png"
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
            <Form />

            <div className="weather__img light">
              <OutputImg weatherImg={weatherImg} />
            </div>
          </div>

          <div className="main__start-button light">
            <Button src={"start.png"} type={"submit"} form={"weather__form"}>
              Узнать погоду!
            </Button>
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
