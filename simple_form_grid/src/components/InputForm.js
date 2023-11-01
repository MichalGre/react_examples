import { useState } from "react";
import AlertModal from "./AlertModal";
import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  let onSubmit = (event) => {
    event.preventDefault();
    if (+enteredAge <= 0 || +enteredAge > 150) {
      setError("Invalid entered age");
    } else if (enteredName.trim() === "") {
      setError("Name cannot be empty");
    } else {
      setError("");

      props.onSubmit({
        id: Math.floor(Math.random() * 1000) + 1,
        age: enteredAge,
        name: enteredName,
      });

      setEnteredName("");
      setEnteredAge("");
    }
  };

  function onModalClose() {
    setError(false);
  }
  let onEnteredName = (event) => {
    setEnteredName(event.target.value);
  };
  let onEnteredAge = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div className={classes["form-container"]}>
      <h1>Add member</h1>
      <form onSubmit={onSubmit}>
        <input
          v-model="name"
          value={enteredName}
          onChange={onEnteredName}
          placeholder="Enter your name"
        />
        <input
          v-model="age"
          value={enteredAge}
          onChange={onEnteredAge}
          type="number"
          placeholder="Enter your age"
        />
        <button type="submit">Add</button>
      </form>
      <AlertModal
        opened={error && error.length > 0}
        onClose={onModalClose}
        errorMessage={error}
        errorHeader="Validation error"
      />
    </div>
  );
};
export default InputForm;
