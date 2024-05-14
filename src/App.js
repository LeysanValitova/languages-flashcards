import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { BrowserRouter as Router} from 'react-router-dom';
import WordsStore from './stores/words';
import {Provider} from 'mobx-react'

const store = {
  wordstore: new WordsStore()
}

function App() {
  return (
    <Provider {...store}>
    <Router>
    <div>
      <Header/>
        <Main/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
