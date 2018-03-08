import React, { Component } from "react";
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";

const API_KEY = "AIzaSyA33ekq2jSbMF7fRSyzBKIpKMohPS2oYfM";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({ key: API_KEY, term: "surf" }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			console.log(videos);
		});
	}

	render() {
		return (
			<div className="App">
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect = { (selectedVideo) => { this.setState({ selectedVideo }); } }
				videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
