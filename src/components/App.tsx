import React from "react";
import SearchBar from "./SearchBar";
import axios from "../api/unsplash";
import ImageList from "./ImageList";

interface AppState {
  images: any[];
}

class App extends React.Component<any, AppState> {
  state = { images: [] };
  onSearchSubmit = async (term: string) => {
    const response = await axios.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
