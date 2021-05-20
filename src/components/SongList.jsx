import React from "react";
import Song from "./Song";

const SongList = ({ songs, handleUpdateClick }) => {
	const songDisplay = songs.map((song, i) => {
		return <Song key={i} handleUpdateClick={handleUpdateClick}song={song} />;
	});
	return (
		<article>
			<h2>All songs</h2>
			{songDisplay}
		</article>
	);
};
export default SongList;
