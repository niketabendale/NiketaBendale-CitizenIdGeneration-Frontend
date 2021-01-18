import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import CitizenIdComponent from './components/CitizenIdComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <div className="App">
        
      
     
      <Router>
        <Switch>
        
          
          <CitizenIdComponent/>

          </Switch>
      </Router>
       
      
      </div>
     </div>
  );
}

export default App;
