import React, { Component } from 'react';
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyA33ekq2jSbMF7fRSyzBKIpKMohPS2oYfM";

class App extends Component {
  constructor(props){
  	super(props);

  	this.state = {videos: []};

  	YTSearch({key: API_KEY, term: "free running"}, (videos) => {
		this.setState({ videos });
		console.log(this.state.videos);
	});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
