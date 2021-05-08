import React from 'react';
import classes from './style.module.css';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../Redux/users-reducer";
import userPhoto from '../../assets/images/users.png';
import axios from "axios";
import Preloader from "../Preloader";

const UsersComponent = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={classes.pagination}>
            {pages.map(p => <span className={props.currentPage === p && classes.selectedPage}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}>{p}</span>)}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={classes.usersImg}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
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

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersComponent totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetchingAC: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

const Users = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default Users;