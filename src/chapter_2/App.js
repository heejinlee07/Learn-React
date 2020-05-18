import React, { Component } from "react";
import ButtonChild01 from "./chapter_2/ButtonChild01";
import ButtonChild02 from "./chapter_3/ButtonChild02";

const AppStyle = {
  padding: 100,
  margin: 100,
  border: "1px solid #333",
};

class App extends Component {
  render() {
    return (
      <div className="App" style={AppStyle}>
        <h2>부모 컴포넌트</h2>
        <ButtonChild01 title="주황색 버튼" />
        <ButtonChild02 title="노랑색 버튼" />
      </div>
    );
  }
}

export default App;
