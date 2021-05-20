import './App.css';
import {useState} from 'react'
import PlayList from './components/PlayList'
import SongList from './components/SongList'
import Form from './components/Form'

function App() {
// STATE
  const [songs, setSongs] = useState([])
  const [playList, setPlayList] = useState([])

// OTHER VARIABLES
  const url = 'localhost:4500'
  // const url = 'heroku url'       // Swith to this when deployed

// 



  return (
    <div className="App">
      <header>Tunr header</header>
      <PlayList />
      <SongList />
      <Form />
    </div>
  )
}

export default App;
