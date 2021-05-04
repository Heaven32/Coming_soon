import React from 'react';
import classes from './style.module.css'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import axios from "axios";

const UsersFunction = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/')

        props.setUsers( [
            {
                id: 1,
                followed: true,
                status: 'I`m boss',
                location: {
                    city: 'Dnipro',
                    country: 'Ukraine'
                },
                message: 'The message on the card said \'Be my Valentine\'.',
                name: 'User1',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYs5pjJL91GmWCY320ehmbGjILJt5ofZCmxA&usqp=CAU'
            },
            {
                id: 2,
                followed: false,
                status: 'I`m boss1',
                location: {
                    city: 'Dnipro1',
                    country: 'Ukraine'
                },
                message: 'She wasn\'t in so I left a message on her answerphone',
                name: 'User2',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_yv0U_2N_0KokOGogPD0al8ZsxrOK4Hu3A&usqp=CAU'
            },
            {
                id: 3,
                followed: true,
                status: 'I`m boss2',
                location: {
                    city: 'Dnipro2',
                    country: 'Ukraine'
                },
                message: 'Can you give Jo a message for me? Tell her I\'ve booked a tennis court for 6.30.',
                name: 'User3',
                avatar: 'https://chto-takoe-lyubov.net/wp-content/uploads/2020/05/Risunki-dlya-srisovki-karandashom-Smeshariki-1.jpg'
            },
            {
                id: 4,
                followed: false,
                status: 'I`m boss3',
                location: {
                    city: 'Dnipro3',
                    country: 'Ukraine'
                },
                message: 'When I got home, I found a mysterious message sellotaped to the front door',
                name: 'User4',
                avatar: 'https://klike.net/uploads/posts/2018-06/1528718816_2.jpg'
            },
        ])
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={classes.usersImg}>
                    <img src={u.avatar} alt=""/>
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
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
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