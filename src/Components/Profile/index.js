import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";

const ProfileContainer = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPosts/>
        </div>
    )
}

class Profile extends React.Component {

    sdcomponentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId)
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

let withUrlDataContainerComponent = withRouter(Profile)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
