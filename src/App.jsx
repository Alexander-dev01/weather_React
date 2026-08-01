import Weather from "./components/Weather"
import {Logic} from "./context/WeatherContext"


const App = () => {
  return (
    <>
      <Logic>
        <Weather />
      </Logic>
    </>
  )
}
export default App
