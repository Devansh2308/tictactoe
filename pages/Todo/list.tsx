import React from "react";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  ListItem,
  Checkbox,
  ListItemText,
  IconButton
} from "@material-ui/core";

const list = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox></Checkbox>
        <ListItemText primary={todo}></ListItemText>
        <IconButton aria-label="delete" onClick={() => deleteTodo(index)}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </ListItem>
    ))}
  </List>
);
export default list;
