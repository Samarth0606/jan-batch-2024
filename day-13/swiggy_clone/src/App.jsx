import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css"
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
function App(){
  return(
    <Provider store={appStore}>
      <div>
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}

export default App;

// Process.env.API_KEY