import "./App.css";
import React from "react";
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
	const [formMode, setFormMode] = useState(["create"]);
	const [formDataForUpdate, setFormDataForUpdate] = useState({});
	// OTHER VARIABLES
	const url = "http://songs-backend-app.herokuapp.com"; // Swith to this when deployed

	//  handler Functions

	// triggered by clicking a Song component
	// updates formMode and formDataForUpdate to re-render Form
	const handleUpdateClick = (song) => {
		console.log("handle update song data: ", song);
		setFormMode("update");
		setFormDataForUpdate({
			...song,
		});
	};

	const handleCreate = (newSong) => {
		console.log(newSong);
		fetch(url + "/songs/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newSong),
		}).then(() => {
			getSongs();
		});
	};

	// triggered by submitting a form in 'update' mode
	// retrieves a song from the DB and updates it w/ new data
	const handleUpdate = (song) => {
		console.log(song);
		fetch(url + "/songs/" + song._id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(song),
		}).then(getSongs());
	};
  
  const handleDelete = (song) => {
    fetch(url + "/songs/", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(getSongs())
  }
  
  const handleAddPlay = (song) => {
    console.log("addPlay",song)
    setPlayList([
      ...playList,
      song
    ])
  }
	//  other Functions
	const getSongs = () => {
		console.log("getSongs");
		fetch(url + "/songs/")
			.then((res) => res.json())
			.then((data) => {
				console.log("getSongs data", data.data);
				setSongs(data.data);
			});
	};

	useEffect(() => {
		getSongs();
	}, []);

	return (
		<div className="App">
			<header>Tunr header</header>
			<PlayList songs={playList}/>
			<SongList handleAddPlay={handleAddPlay} handleUpdateClick={handleUpdateClick} songs={songs} />
			<Form
				handleUpdate={handleUpdate}
				handleCreate={handleCreate}
				mode={formMode}
				song={formDataForUpdate}
			/>
		</div>
	);
}

export default App;
