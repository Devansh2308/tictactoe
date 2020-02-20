import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  })
);

export default function BasicTextFields({ saveTodo }) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={e => {
          e.preventDefault();
          setValue(e.target.value);
          console.log(value);
        }}
        value={value}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={e => {
          e.preventDefault();
          saveTodo(value);
        }}
      >
        Add Todo
      </Button>
    </form>
  );
}
