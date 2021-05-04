const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     status: 'I`m boss',
        //     location: {
        //         city: 'Dnipro',
        //         country: 'Ukraine'
        //     },
        //     message: 'The message on the card said \'Be my Valentine\'.',
        //     name: 'User1',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYs5pjJL91GmWCY320ehmbGjILJt5ofZCmxA&usqp=CAU'
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     status: 'I`m boss1',
        //     location: {
        //         city: 'Dnipro1',
        //         country: 'Ukraine'
        //     },
        //     message: 'She wasn\'t in so I left a message on her answerphone',
        //     name: 'User2',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_yv0U_2N_0KokOGogPD0al8ZsxrOK4Hu3A&usqp=CAU'
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     status: 'I`m boss2',
        //     location: {
        //         city: 'Dnipro2',
        //         country: 'Ukraine'
        //     },
        //     message: 'Can you give Jo a message for me? Tell her I\'ve booked a tennis court for 6.30.',
        //     name: 'User3',
        //     avatar: 'https://chto-takoe-lyubov.net/wp-content/uploads/2020/05/Risunki-dlya-srisovki-karandashom-Smeshariki-1.jpg'
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     status: 'I`m boss3',
        //     location: {
        //         city: 'Dnipro3',
        //         country: 'Ukraine'
        //     },
        //     message: 'When I got home, I found a mysterious message sellotaped to the front door',
        //     name: 'User4',
        //     avatar: 'https://klike.net/uploads/posts/2018-06/1528718816_2.jpg'
        // },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;