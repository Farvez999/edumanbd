import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.scss';
import Header from './components/Navbar/Header';

import Footer from './components/Footer/Footer';
import { Home } from "./pages/Home/Home";

const Layout =()=>{
  return(
    <div className="app">

      <Header/>

      <Outlet/>

      <Footer/>
    </div>

  )
}



const router = createBrowserRouter([

  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/home',
        element: <Home/>

      },
      


    ]
  },
  

])
function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Footer/> */}
      <div>
      <RouterProvider  router={router}/>
    </div>
      
      
      
    </div>
  );
}

export default App;
