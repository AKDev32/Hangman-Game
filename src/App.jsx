import { Routes, Route } from 'react-router-dom';
import './App.css'
import TextInputForm from './components/TextInputForm/TextInputForm';
import TextInputFormContainer from './components/TextInputForm/textInputFormContainer';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/start' element= {<StartGame/>} />
        <Route path='/play' element= {<PlayGame/>}/>
        <Route path='/' element= {<h1>Home</h1>} />
      </Routes>
    </div>
  )
}

export default App;
