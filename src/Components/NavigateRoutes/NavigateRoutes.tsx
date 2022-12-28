import {Route, Routes} from "react-router-dom";
import {Anime} from "../../Pages/Anime";
import {Books} from "../../Pages/Books";
import {Main} from "../../Pages/Main";
import {ReactNode} from "react";

interface IRoutes {
  url: string;
  component: ReactNode;
}

const routes:IRoutes[] = [
  {url:'/', component:<Main/>},
  {url:'/anime', component:<Anime/>},
  {url:'/books', component:<Books/>},
]

export const NavigateRoutes = () => {
  return (
    <Routes>
      {routes.map(item=>
        <Route key={item.url} path={item.url} element={item.component}/>
      )}
      <Route path="*" element={<h3 style={{padding: '15px 0', textAlign:'center'}}>404 - Страница не найдена</h3>}/>
    </Routes>
  )
}