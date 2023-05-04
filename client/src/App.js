import './App.css';
import { Route } from "react-router-dom"

import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './views/details/Detail';
import Form from './views/form/Form';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
        
    </div>
  );
}

export default App;

