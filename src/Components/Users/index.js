/* eslint-disable react/jsx-no-undef */
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import './style.css';
import User_1 from "./User_1";
import User_2 from "./User_2";
import User_3 from "./User_3";


const Users = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="title-block">
                    <h3>Our Staff</h3>
                        <h2>Meet The Buther Block team</h2>
                </div>
                <div className="content">

                    <Router>
                        <nav>
                            <li><NavLink to="/users/" activeClassName="selected" exact >User - 1</NavLink></li>
                            <li><NavLink to="/users/user_2" activeClassName="selected" >User - 2</NavLink></li>
                            <li><NavLink to="/users/user_3" activeClassName="selected" >User - 3</NavLink></li>
                        </nav>
                        <Switch>
                            <Route exact path="/users/" component={User_1} />
                            <Route  path="/users/user_2" component={User_2} />
                            <Route  path="/users/user_3" component={User_3} />
                        </Switch>
                    </Router>

                </div>
            </div>
        </div>
    );
}

export default Users;