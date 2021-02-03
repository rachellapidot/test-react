import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StartLoader from "./components/startLoader";
import Quiz from "./components/quiz"
import Score from "./components/score"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "20%",
    fontSize: "30px",
    fontWeight: 700,
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    color: "#3f51b5",
    fontFamily:"Roboto"
  },
  body: {
    width: "100%",
    height: "75%",
    overflowY:"auto"    
  }
});

function App() {
  const classes = useStyles();
  return [
    <div className={classes.header}>Quiz Portal</div>,
    <div className={classes.body}>
      <Router>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/">
            <StartLoader />
          </Route>
        </Switch>
      </Router>
    </div>
  ]
}

export default App;
