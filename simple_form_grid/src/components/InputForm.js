import { useState, useRef } from "react";
import AlertModal from "./AlertModal";
import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  let onSubmit = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  function onModalClose() {
    setError(false);
  }

  return (
    <div className={classes["form-container"]}>
      <h1>Add member</h1>
      <form onSubmit={onSubmit}>
        <input
          ref={nameInputRef}
          v-model="name"
          placeholder="Enter your name"
        />
        <input
          ref={ageInputRef}
          v-model="age"
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
