import './App.css';
import { Route } from "react-router-dom"

import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/details/Detail';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
        
    </div>
  );
}

export default App;

