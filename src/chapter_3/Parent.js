/* eslint-disable */
import React, { useState, useRef } from "react";
import Child from "./Child";

/**
 * 1~45번까지 숫자중 7개를 뽑음
 */
function Parent() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const parentLotto = lotto;
  const inputRef = useRef();
  // 로또번호 추첨
  const makeLotto = () => {
    let lottoArray = [];
    let count = 0;
    let until = 7;
    while (1) {
      if (count === until) break;
      let pop = parseInt(Math.random() * 45) + 1;
      if (lottoArray.indexOf(pop) < 0) {
        lottoArray.push(pop);
        count++;
      }
    }
    console.log(lottoArray);
    setLotto(lottoArray);
  };

  const changeInput = (e) => {
    console.log(e.target.value);
    console.log(inputRef.current.value);
  };

  return (
    <div>
      부모컴포넌트
      <br />
      <button onClick={makeLotto}>로또생성기</button>
      <input type="text" ref={inputRef} onChange={changeInput}></input>
      <br />
      <h1>
        {parentLotto.map((lo, i) => {
          return i === 6 ? lo : lo + ",";
          // return lo + ",";
        })}
      </h1>
      <Child lotto={parentLotto}>
        <h1>
          자식의 자식
          <h2>자식의 자식의 자식</h2>
        </h1>
      </Child>
    </div>
  );
}

export default Parent;
