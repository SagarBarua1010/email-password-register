import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <h2>This is Home {user && <span>{user.displayName}</span>} </h2>
    </div>
  );
};

export default Home;
