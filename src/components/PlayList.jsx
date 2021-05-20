import React from 'react'
import Song from './Song'

const PlayList = (props) => {
	const displaySongs = props.songs.map((song,i)=>{
		return <Song song={song}/>
	})
	return (
		<article className="playlist">
			<h2>Playlist</h2>
			{displaySongs}
		</article>
	)
}
export default PlayList