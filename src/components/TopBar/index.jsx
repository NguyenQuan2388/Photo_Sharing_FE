import React, { useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/AuthContext";
import FileUpload from "./FileUpload";

/**
 * Define TopBar, a React component of Project 4.
 */
const TopBar = () => {
  const {
    authState: { user },
    logoutUser
  } = useContext(AuthContext);

  const uploadPhoto = async () => {

  }

  return (
    <div className="topbar">
      <div className="left">Hi {user.first_name}</div>
      <div className="right">
        <FileUpload />
        <div>{user.first_name} {user.last_name}</div>
        <div className="right-button" onClick={() => logoutUser()}>Log out</div>
      </div>
    </div>
  );
};
export default TopBar;
