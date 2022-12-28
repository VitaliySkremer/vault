import './App.scss'
import {Header} from "./Components/Header/Header";
import {Snow} from "./Components/UI/Snow/Snow";
import {NavigateRoutes} from "./Components/NavigateRoutes/NavigateRoutes";
import {Footer} from "./Components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <Header/>
      <main className='container'>
        <NavigateRoutes/>
      </main>
      <Footer/>
      <Snow/>
    </div>
  )
}

export default App
