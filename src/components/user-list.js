import React from "react";
import { Link } from 'react-router-dom';
import {ProfilePic } from './profile-picture';

export const UserList  = users => {
    let usersList = null
    if (users['users']) {

        usersList =  users['users'].map((user,i) =>{
            return (
                <Link to = {`/${user.login}`} key={i} params={{username:user.login}}>
                    <ProfilePic src={user.avatar_url}/>
                </Link>
            )    
        });
    }
 
    return (
        <div className="grid">
            {usersList}
        </div>
    )

}