const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const followActionCreator = (id) => ({ type: FOLLOW, userId: id})
export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, userId: id})
export const setUsersActionCreater = (users) => ({type: SET_USERS, users: users})

const initialState = {
    users: [
        // {id: 1, img: 'img/users.png', followed: true, fullName: 'Dima', status: 'I am a boss', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 2, img: 'img/users.png', followed : true, fullName: 'Oleh', status: 'I am a boss', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 3, img: 'img/users.png', followed: false, fullName: 'Taras', status: 'I am a boss', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 4, img: 'img/users.png', followed: true, fullName: 'Tomek', status: 'I am a boss', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 5, img: 'img/users.png', followed: false, fullName: 'Ksysiek', status: 'I am a boss', location: {city: 'Kyiv', country: 'Ukraine'}},
    ],
}

const usersReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {        
        case FOLLOW:
            newState = JSON.parse(JSON.stringify(state))
            newState.users.forEach((el) => {
                if(el.id === action.userId){
                    el.followed = true
                }
            })
            return newState
        case UNFOLLOW:
            newState = JSON.parse(JSON.stringify(state))
            newState.users.forEach((el) => {
                if(el.id === action.userId){
                    el.followed = false
                }
            })
            return newState
        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state;
    }
}

export default usersReducer;