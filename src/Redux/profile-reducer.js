const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {message: 'hello', age: 30, name: 'John122', countLike: 3, id: 1},
        {message: 'hello1', age: 301, name: 'John12', countLike: 32, id: 2},
    ],
    newPostText: 'man, what`s upd?',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                name: 'Bill',
                countLike: 0,
                age: 45,
                message: state.newPostText
            };
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE}, profile)

export default profileReducer;