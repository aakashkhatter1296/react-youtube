import React, { Component } from 'react';
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";

const API_KEY = "AIzaSyA33ekq2jSbMF7fRSyzBKIpKMohPS2oYfM";

class App extends Component {
  constructor(props){
  	super(props);

  	this.state = {videos: []};

  	YTSearch({key: API_KEY, term: "surf"}, (videos) => {
		this.setState({ videos });
		console.log(videos);
	});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
