const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'some text 1'},
        {id: 2, message: 'some text 2'},
    ],
    dialogsData: [
        {
            id: 1,
            name: 'User1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYs5pjJL91GmWCY320ehmbGjILJt5ofZCmxA&usqp=CAU'
        },
        {
            id: 2,
            name: 'User2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_yv0U_2N_0KokOGogPD0al8ZsxrOK4Hu3A&usqp=CAU'
        },
    ],
    newMessageText: 'cff'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 3,
                message: state.newMessageText
            };
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;