import { useState } from "react";
import ContextChild1 from "./ContextChild1";
import ContextChild2 from "./ContextChild2";
import UserContext from "./UserContext";

const ContextParent = function () {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <input value={user} onChange={handleChange}></input>
      <UserContext.Provider value={user}>
        <ContextChild1 />
        <ContextChild2 />
      </UserContext.Provider>
    </>
  );
};

export default ContextParent;
