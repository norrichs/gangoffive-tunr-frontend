import React from "react";
import Song from "./Song";

const SongList = ({ songs, handleUpdateClick, handleAddPlay }) => {
	const songDisplay = songs.map((song, i) => {
		return <Song key={i} handleUpdateClick={handleUpdateClick} handleAddPlay={handleAddPlay} song={song} />;
	});
	return (
		<article>
			<h2>All songs</h2>
			{songDisplay}
		</article>
	);
};
export default SongList;
