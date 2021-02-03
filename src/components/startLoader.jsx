import React, { useEffect } from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "80%",
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily:"Roboto"
  },
  h4: {
      fontFamily:"Roboto"
  }
});
const StartLoader = (props) => {
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      history.replace("/quiz");
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={classes.root}>
      <h4 className={classes.h4}>This will take few moments...</h4>
      <LinearProgress />
    </div>
  );
};
export default StartLoader;
