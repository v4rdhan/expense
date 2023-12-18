import "./Expectation.css";

import TextField from "@mui/material/TextField";

export default function Expectation() {
  return (
    <div className="input-area">
      <TextField id="outlined-basic" label="Expectation" variant="outlined" />
      <TextField id="outlined-basic" label="Reality" variant="outlined" />
    </div>
  );
}
