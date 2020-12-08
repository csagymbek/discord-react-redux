import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../configs/firebase";
import "../styles/Login.css";

export default function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((er) => console.log(er));
  };

  return (
    <div className="login ">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}
