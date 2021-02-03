import React, { useState } from "react";
import {
  Button,
  Container,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";


const questions = require("../data/questions.json");
const useStyles = makeStyles({
  h2: {
    fontFamily: "Roboto",
  },
  form: {
    position: "relative",
  },
  button: {
    position: "fixed",
    right: "60px",
  },
});

const Question = ({ title, options, handleRadioChange, value }) => {
  const classes = useStyles();
  return [
    <h2 className={classes.h2}>{title}</h2>,
    <RadioGroup
      aria-label="quiz"
      name="quiz"
      value={value}
      onChange={handleRadioChange}
    >
      {options.map((option, i) => (
        <FormControlLabel
          key={option + i.toString()}
          value={i}
          control={<Radio />}
          label={option}
        />
      ))}
    </RadioGroup>,
  ];
};

const Quiz = () => {
  const classes = useStyles();
  
  const [answers, setAnswers] = useState([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
  ]);
  const history = useHistory()

  const handleSubmit = () => {
    history.push("/score", {answers})
  };

  const handleRadioChange = (i, { value }) => {
    answers[i] = parseInt(value);
    setAnswers([...answers]);
  };
  const renderQuiz = () => {
    return questions.map((q, i) => (
      <Question
        handleRadioChange={({ target }) => handleRadioChange(i, target)}
        value={answers[i]}
        title={q.question}
        key={q.question}
        options={q.options}
      />
    ));
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Container>
        <Button
          className={classes.button}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Check Answer
        </Button>
        {renderQuiz()}
      </Container>
    </form>
  );
};
export default Quiz;
