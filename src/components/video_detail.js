import React from "react";

export default function VideoDetail({video}) {
	if(!video) {
		return (
			<div>
				<h3>Loading...</h3>
			</div>
		);
	}
	const url = `https://youtube.com/embed/${video.id.videoId}`;
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe title="Youtube Video" src={url} className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div><h3>{ video.snippet.title }</h3></div>
				<div>{ video.snippet.description }</div>
			</div>
		</div>
	);
}