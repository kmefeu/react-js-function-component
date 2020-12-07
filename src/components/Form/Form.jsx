import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Form({ onSub, isIdValid }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [sales, setSales] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [error, setError] = useState({id:{status:true, text:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSub({ name, lastName, id, sales, newsletter });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
      onBlur={
        (event)=>{
          const isValid = isIdValid(event.target.value)
          setError({id:isValid})
        }
      }
      error={!error.id.status}
      helperText={error.id.text}
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
        id="outlined-basic"
        label="Id Document"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Newsletter"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sales}
            onChange={(event) => {
              setSales(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Sales"
      />

      <Button type="submit" variant="contained" color="primary">
        Continue
      </Button>
    </form>
  );
}

export default Form;
