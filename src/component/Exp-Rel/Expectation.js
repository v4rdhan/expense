import "./Expectation.css";

import TextField from "@mui/material/TextField";

export default function Expectation({ expectationValue, setExpectationValue }) {
  return (
    <div className="input-area">
      <TextField
        id="outlined-basic"
        label="Expectation"
        variant="outlined"
        onChange={(event) => setExpectationValue(event.target.value)}
      />
      console.log(expectationValue);
      <TextField id="outlined-basic" label="Reality" variant="outlined" />
    </div>
  );
}
