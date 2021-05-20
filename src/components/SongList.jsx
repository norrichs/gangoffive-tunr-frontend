import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
	const songDisplay = songs.map((song) => {
		return <Song song={song} />;
	});
	return (
		<article>
			<h2>All songs</h2>
			{songDisplay}
		</article>
	);
};
export default SongList;
