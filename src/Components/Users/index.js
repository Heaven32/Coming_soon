import React from 'react';
import classes from './style.module.css'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import userPhoto from '../../assets/images/users.png'
import axios from "axios";

const UsersFunction = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={classes.usersImg}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{u.id}</div>
                </span>
                <span>
                </span>
            </span>
        </div>)}
    </div>
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const Users = connect(mapStateToProps, mapDispatchToProps)(UsersFunction);

export default Users;