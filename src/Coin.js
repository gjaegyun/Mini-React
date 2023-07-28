import React, { useState } from 'react';

const Coin = () => {
  const [index, setIndex] = useState("0");
  const [result, setResult] = useState(null);
  const [currentCoin, setCurrentCoin] = useState("앞면");

  const onSelect = (event) => {
    setIndex(event.target.value);
    console.log(event.target.value);
  };

  const throwCoin = () => {
    const realTrue = Math.random() < 0.5;
    const randomResult = realTrue ? "성공" : "실패";
    setResult(randomResult);

    if (!realTrue) {
      setCurrentCoin(index === "0" ? "뒷면" : "앞면");
    }

    setTimeout(() => {
      setResult(null);
    }, 2000);
  };

  return (
    <div style={{
      color: "white",
      backgroundColor: "gray",
      marginTop: "17%"
    }}>
      <h3>행운의 동               |               전 던지기</h3>
      <h2>현재 동전 : {currentCoin}</h2>
      <h5>당신의 선택을 반으로 갈라서 열쇠로 잠구고 샤워한다.</h5>
      <p>
        {result}
      </p>
      <select
        value={index}
        onChange={onSelect}
        style={{
          color: "white",
          backgroundColor: "gray",
          border: "1px solid white",
          width: '10%',
          borderRadius: "3px"
        }}>
        <option value="0">앞면</option>
        <option value="1">뒷면</option>
      </select>

      <p>
        <button style={{
          color: "white",
          backgroundColor: "black",
          borderRadius: "5px",
          width: "10%",
          padding: "10px 10px",
          fontSize: "15px",
          fontWeight: "bold",
        }}
          onClick={throwCoin}
        >
          동전 던지기
        </button>
      </p>
    </div>
  );
}

export default Coin;
