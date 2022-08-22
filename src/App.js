import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import DisplayUser from "./components/DisplayUser/DisplayUser";

function App() {
  const [userDataList, setUserDataList] = useState("");
  const saveUserDataHandler = (EnteredUserData) => {
    setUserDataList((prevUserList)=>{
      return [...prevUserList, EnteredUserData]
    });
  };
  return (
    <div className="App">
      <AddUser onSaveUserData={saveUserDataHandler} />
      <DisplayUser userList={userDataList} />
    </div>
  );
}

export default App;
