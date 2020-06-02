import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import CategoryTiles from "./CategoryTiles";

class App extends Component {
  state = {
    videos: [],
    seletedVideo: null,
    tiles:['Music','Sports','Comedy','Acting','News']
  };

  getSearchQuery = async (value) => {
    const result = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: youtube,
          q: value,
        },
      }
    );
    this.setState({ videos: result.data.items,seletedVideo:result.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ seletedVideo: video });
    console.log(this.state.seletedVideo);
  };

  render() {
    return (
      <div>
        <h1 className="ui left aligned silver block header">Video Buzz</h1>
        <SearchBar onFormSubmit={this.getSearchQuery} />
        <CategoryTiles tiles ={this.state.tiles} getResult = {this.getSearchQuery} className="ui container"/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column" style={{ margin: "15px" }}>
              <VideoDetails video={this.state.seletedVideo} />
            </div>
            <div className="four wide column">
              <VideoList
                videos={this.state.videos}
                onSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
