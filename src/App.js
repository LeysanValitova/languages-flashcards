import './App.css';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Navigation/>
        <Main/>
    </div>
    </Router>
  );
}

export default App;
