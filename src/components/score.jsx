import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const data = require("../data/questions.json");

const Score = () => {
  //   const [prev, setPrev] = useState();
  const location = useLocation();
  const answers = location.state.answers;
  const [score, setScore] = useState(-1);
  const [prevScores, setPrevScores] = useState();
  useEffect(() => {
    let sum = 0;
    answers.forEach((a, i) => {
      if (a === parseInt(data[i].correctValue)) {
        sum = sum + 1;
      }
    });
    setScore(sum);
  }, [answers]);
  useEffect(() => {
    if (score !== -1) {
      let localPrev = localStorage.getItem("prevScores");
      if (localPrev) {
        localPrev = JSON.parse(localPrev);
        localPrev.push(score);
        setPrevScores(localPrev);
        localStorage.setItem("prevScores", JSON.stringify(localPrev));
      } else {
        let arr = [];
        arr[0] = score;
        localStorage.setItem("prevScores", JSON.stringify(arr));
      }
    }
  }, [score]);
  return (
    <div>
      <h3>Your Score : {score} / 10 </h3>
      {prevScores && (
        <div>
          Previos scores :
          {prevScores.length > 1
            ? prevScores.map((ps, i) => {
                if (i !== prevScores.length - 1) {
                  return <div>{ps} / 10</div>;
                }
                return null;
              })
            : prevScores.map((ps) => <div>{ps} / 10</div>)}
        </div>
      )}
    </div>
  );
};
export default Score;
