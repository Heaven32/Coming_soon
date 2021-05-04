import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import Post from "./Post";

const MyPostsFunction = (props) => {
    const postsElements = props.post.map(element => <Post name={element.name}
                                                          key={element.id}
                                                          age={element.age}
                                                          countLike={element.countLike}
                                                          message={element.message} />)

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e) => {
        props.updateNewPostActionCreator(e.target.value)
    }

    return (
        <div>
            My posts
            <div className="">
                <div><textarea onChange={onPostChange}
                               value={props.newPostText} />
                </div>
                <button onClick={onAddPost} >Add post</button>
                <button>Remove post</button>
            </div>
            {postsElements}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostActionCreator: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}

const MyPosts = connect(mapStateToProps, mapDispatchToProps) (MyPostsFunction);

export default MyPosts;