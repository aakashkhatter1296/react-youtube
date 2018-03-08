import React from "react";

export default function VideoListItem({video}) {
	const thumbnailUrl = video.snippet.thumbnails.default.url;
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={thumbnailUrl} alt="" className="media-object" />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
}
