import React from "react";
import './Users.scss'
import axios from 'axios' 

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    const changeFollow = (user) => {
        if(user.followed){
            props.unfollow(user.id)
        } else{
            props.follow(user.id)
        }
    }
    return(
        <div className="users">
            <button className="get-users" onClick={getUsers}>get users</button>
            {props.users.map(user => 
                <div className="user__item" key={user.id}>
                    <div className="user__photo">
                        <img src='img/users.png' alt="avatar" />
                        <button onClick={() => changeFollow(user)} className="user__follow">
                            {user.followed?
                                'follow'
                                :
                                'unfollow'
                            }
                        </button>
                    </div>
                    <div className="user__info">
                        <div className="user__deskription">
                            <h2 className="user__name">{user.name}</h2>
                            <div className="user__status">{user.status}</div>
                        </div>
                        <div className="user__location">
                            Kyiv <br /> Ukraine
                        </div>
                    </div>
                </div> )
            }
        </div> 
    )
}

export default Users;