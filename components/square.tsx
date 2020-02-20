import React from "react";
import { Button } from "@material-ui/core";

function square({ onClick, value }) {
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={onClick}>
        {value}
      </Button>
    </div>
  );
}

export default square;
