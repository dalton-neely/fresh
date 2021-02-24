import {Home} from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import {Movies} from "./pages/Movies";
import {Series} from "./pages/Series"
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
