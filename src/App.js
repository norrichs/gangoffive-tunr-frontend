import "./App.css";
import { useEffect, useState } from "react";
import PlayList from "./components/PlayList";
import SongList from "./components/SongList";
import Form from "./components/Form.js";

function App() {
	// STATE
	const [songs, setSongs] = useState([]);
	const [playList, setPlayList] = useState([]);

	// OTHER VARIABLES
	const url = "localhost:4500";
	// const url = 'heroku url'       // Swith to this when deployed
	const dummyList = [
		{
			title: "Stairway to Heaven",
			artist: "Led Zeppelin",
			time: "8:03",
		},
		{
			title: "Shoot to Thrill",
			artist: "ACDC",
			time: "5:18",
		},
		{
			title: "Happy",
			artist: "Pharrell",
			time: "3:55",
		},
	];
	//  handler Functions
  

  //  other Functions
  useEffect(()=>{
    
    // TODO remove this later
    // initiate state  with dummy data
    setSongs(...[dummyList])
  },[])

	return (
		<div className="App">
			<header>Tunr header</header>
			<PlayList />
			<SongList songs={songs}/>
			{/* <Form /> */}
		</div>
	);
}

export default App;
