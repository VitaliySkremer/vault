import './App.module.scss'
import {Header} from "./Components/Header/Header";
import {Snow} from "./Components/UI/Snow/Snow";
import {NavigateRoutes} from "./Components/NavigateRoutes/NavigateRoutes";
import {Footer} from "./Components/Footer/Footer";
import {Menu} from "./Components/Menu/Menu";
import style from './App.module.scss'
import {MainInfo} from "./Components/MainInfo/MainInfo";

function App() {

  return (
    <div className="App">
      <Header/>
      <main className='container'>
        <div>
          <Menu/>
        </div>
        <div className={style.main__content}>
          <NavigateRoutes/>
        </div>
        <div>
          <MainInfo/>
        </div>
      </main>
      <Footer/>
      <Snow/>
    </div>
  )
}

export default App
