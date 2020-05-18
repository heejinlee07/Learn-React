import React, { useState, useRef } from "react";
import Login from "./Login";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    idx: 1,
    id: "hello",
    password: "bye",
  });

  const nextId = useRef(2);

  const onCreate = () => {
    setUser({
      idx: nextId.current,
      id,
      password,
    });
  };
  const { idx, id, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도");
  };
  const handleIdChange = (e) => {
    console.log("사용자 아이디 입력중");
    const { value, name } = e.target;
    console.log(value, name);
  };
  const handlePassChange = (e) => {
    console.log("사용자 비밀번호 입력중");
    const { value, name } = e.target;
    console.log(value, name);
  };
  const onPopup = () => {
    window.alert("로그인 시도");
  };

  return (
    <div className="wrap">
      <header className="headerStyle">로그인</header>
      <h1>로그인</h1>
      <form className="formStyle" onSubmit={handleSubmit}>
        <Login
          id={id}
          password={password}
          handleIdChange={handleIdChange}
          handlePassChange={handlePassChange}
          onPopup={onPopup}
          onCreate={onCreate}
        />
      </form>
    </div>
  );
}

export default App;
