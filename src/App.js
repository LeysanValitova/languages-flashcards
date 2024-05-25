import './App.css';
import Main from './pages/Main';
import Game from './pages/Game';
import Missing from './Components/Missing/Missing';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WordsStore from './stores/words';
import {Provider} from 'mobx-react'


const wordsStore = new WordsStore()


function App() {
  return (
    <Provider wordsStore={wordsStore}>

      <Router>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/game' element={<Game/>}></Route>
          <Route path='*' element={<Missing/>}>
        </Route>
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
