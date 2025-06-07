import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css"
import { Outlet } from "react-router-dom";
function App(){
  return(
    <div>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;