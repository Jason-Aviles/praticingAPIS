import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import GifList from "./GifList";
import "./styles.css";

class App extends React.Component {
  state = { gifs: [] };

  componentDidMount() {
    axios
      .get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    console.log(this.state.gifs);

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <GifList data={this.state.gifs} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
