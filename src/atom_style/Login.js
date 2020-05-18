/* eslint-disable */

import React from "react";
import App from "./App";

function Login({
  id,
  password,
  handleIdChange,
  handlePassChange,
  onPopup,
  onCreate,
}) {
  return (
    <>
      <div>
        <h2>ID:</h2>
        <input
          name={id}
          placeholder="아이디"
          onChange={handleIdChange}
          className="inputStyle"
        />
      </div>
      <div>
        <h2>PASS:</h2>
        <input
          name={password}
          placeholder="비밀번호"
          className="inputStyle"
          onChange={handlePassChange}
        />
      </div>
      <br />
      <button onClick={onPopup} onCreate={onCreate}>
        로그인하기
      </button>
    </>
  );
}

export default Login;
