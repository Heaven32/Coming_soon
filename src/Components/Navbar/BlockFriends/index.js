import React from "react";
import classes from "./style.module.css";
import { connect } from "react-redux";
import People from "./People";

const BlockFriendsFunction = (props) => {
  const people = props.sidebarPage.map((element) => (
    <People name={element.name} key={element.id} ava={element.ava} />
  ));
  return (
    <div className={classes.friends}>
      <h2 className={classes.title_friends}>Friends</h2>
      <div className={classes.block_people}>{people}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sidebarPage: state.sidebarPage.friendsData,
  };
};

const BlockFriends = connect(mapStateToProps)(BlockFriendsFunction);

export default BlockFriends;
