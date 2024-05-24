import './App.css';
import Main from './screens/Main';
import Game from './screens/Game';
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
          <Route path='/table' element={<Main/>}></Route>
          <Route path='/game' element={<Game/>}></Route>
          <Route path='*' element={<Missing/>}>
        </Route>
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
