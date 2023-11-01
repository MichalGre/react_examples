import React from "react";
import AlertModal from "./components/AlertModal";
import InputForm from "./components/InputForm";
import { useState } from "react";
import MembersTable from "./components/MembersTable";
function App() {
  const [members, setMembers] = useState([]);

  function onSubmit(newMember) {
    console.log(newMember);
    setMembers((prev) => {
      return [...members, newMember];
    });
  }

  return (
    <>
      <div id="app" className="container">
        <InputForm onSubmit={onSubmit} />
        <MembersTable members={members} />
      </div>
    </>
  );
}

export default App;
