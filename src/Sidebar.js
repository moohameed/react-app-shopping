import React from 'react'
import {Avatar} from '@material-ui/core'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser) ; 
    const recentItem = (topic) => (
        <div className = "sidebar__recentItem">
            <span className ="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className ="sidebar">
            <div className="sidebar_top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG53rLH9QpsXetZXZMxoi53YDV99eQmfQtng&usqp=CAU" alt ="" />
                <Avatar src={user.photoURL} className="avatar">{user.email[0]}</Avatar>
                <h2> {user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className ="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className ="sidebar__statNumber">2.45</p>
                </div>
                <div className="sidebar__stat">
                <p>views on post</p>
                <p className ="sidebar__statNumber">2.78</p>
                </div>
            </div>

            <div className = "sidebar__bottom">
                <p> Recent </p>
                {recentItem("Angular")}
                {recentItem("Flutter")}
                {recentItem("Ionic")}
                {recentItem("ReactJs")}
                {recentItem("NextJs")}
            </div>
        </div>
    )
}

export default Sidebar
