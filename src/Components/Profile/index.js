import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";

const ProfileContainer = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPosts/>
        </div>
    )
}

class ProfileApi extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <ProfileContainer {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const Profile = connect(mapStateToProps, {setUserProfile})(ProfileApi);

export default Profile;