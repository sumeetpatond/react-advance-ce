import UserContext from "./UserContext";

const ContextChild1 = function () {
  return (
    <UserContext.Consumer>
      {(user) => (user ? <div>Hello, {user}</div> : null)}
    </UserContext.Consumer>
  );
};

export default ContextChild1;
