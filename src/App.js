import "./App.css";
import { useEffect, useState } from "react";
import PlayList from "./components/PlayList";
import SongList from "./components/SongList";
import Form from "./components/Form.js";

function App() {
	// STATE
	const [songs, setSongs] = useState([]);
	const [playList, setPlayList] = useState([]);
  
  // Form component can have 1 of 2 modes - update or create
  //  default mode is 'create'.  All values are empty and submit button says 'Create'
  //  clicking a Song in SongList will trigger an update to formMode="update"
  //  in 'update' mode, the form submit button will read 'Update' and also there will be a 'Delete' button
  //  
  //  formMode is passed as a prop to Form
  const [formMode, setFormMode] = useState(['create'])
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
  const handleUpdate = () =>{

  }

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
			<SongList handleUpdate={handleUpdate} songs={songs}/>
			{/* <Form /> */}
		</div>
	);
}

export default App;
