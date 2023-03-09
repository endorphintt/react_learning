import React from "react";
import Users from "./UsersClass";
import './Users.scss'
import {connect} from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreater} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);