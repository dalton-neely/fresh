import {Home} from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import {Movies} from "./pages/Movies";
import {Series} from "./pages/Series"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
        </BrowserRouter>
    </div>
  );
}

export default App;
