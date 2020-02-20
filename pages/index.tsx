import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Square from "./../components/square";
import square from "./../components/square";
import Alert from "@material-ui/lab/Alert";
import { Button, Link } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    },
    row: {
      display: "flex",
      flexDirection: "row"
    }
  })
);

function Game() {
  const classes = useStyles();
  const [squares, setsquares] = useState(Array(9).fill("-"));
  const [isXNext, setXNext] = useState(true);

  function renderSquare(i: number) {
    return (
      <Square
        onClick={() => {
          if (squares[i] != "-") {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = isXNext ? "X" : "O";
          setXNext(!isXNext);
          setsquares(nextSquares);
        }}
        value={squares[i]}
      ></Square>
    );
  }

  function winner(squares) {
    const winninglines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let j = 0; j < winninglines.length; j++) {
      const [a, b, c] = winninglines[j];
      console.log(j);

      if (
        (squares[a] == "X" || squares[a] == "O") &&
        squares[a] == squares[b] &&
        squares[c] == squares[a]
      ) {
        console.log("here");
        return squares[a];
      }
    }
    return "-";
  }
  function reset() {
    const resetSquares = squares.slice();
    for (let m = 0; m < resetSquares.length; m++) {
      resetSquares[m] = "-";
    }
    setsquares(resetSquares);
  }
  function isBoardFull() {
    for (let k = 0; k < squares.length; k++) {
      if (squares[k] == "-") return false;
      console.log("a");
    }
    return true;
  }
  const Winner = winner(squares);

  function getstatus() {
    console.log(Winner);
    if (Winner == "X" || Winner == "O") {
      return "winner is " + Winner;
    } else {
      if (isBoardFull()) {
        return "Game is Draw";
      } else return "Next Player is - " + (isXNext ? "X" : "O");
    }
  }

  return (
    <div>
      <div className={classes.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={classes.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={classes.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Alert variant="filled" severity="info">
          Game Info :- {getstatus()}
        </Alert>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={reset}>
          Reset
        </Button>
        <Link href="/Todo/main">
          <Button variant="contained" color="primary">
            Todo App
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
