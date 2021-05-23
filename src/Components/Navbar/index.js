import React from "react";
import classes from "./style.module.css";
import NavigationLink from "./NavigationLink";
import BlockFriends from "./BlockFriends";

const Navbar = (props) => {
  return (
    <div className="main">
      <NavigationLink />
      <BlockFriends />
    </div>
  );
};

export default Navbar;
