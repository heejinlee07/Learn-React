/* eslint-disable */
import React, { Component } from "react";
// import classNames from "classnames/bind";
import "./App.css";

// const st = classNames.bind(style);

class App extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log("로그인시도", this);
  };
  idInsert = () => {
    console.log("사용자 아이디 입력중", this);
  };
  pwInsert = () => {
    console.log("사용자 패스워드 입력중", this);
  };
  render() {
    return (
      <div className="blue">
        <p>
          <strong>아이디</strong>
          <input
            type="text"
            onChange={this.idInsert}
            name="id"
            value="아이디 입력"
          />
        </p>
        <p>
          <strong>비밀번호</strong>
          <input
            type="password"
            onChange={this.pwInsert}
            name="password"
            value="비밀번호 입력"
          />
        </p>
        <input type="submit" onClick={this.handleClick}></input>
      </div>
    );
  }
}

export default App;
