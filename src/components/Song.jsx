import React from "react";

const Song = (props) => {
	return (
		<section className="song-component">
			<span>{props.song.title}</span>
			<span>{props.song.artist}</span>
			<span>{props.song.time}</span>
		</section>
	);
};
export default Song