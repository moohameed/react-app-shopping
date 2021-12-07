import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HeaderOption from './HeaderOption'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import  BusinessCenterIcon  from '@material-ui/icons/BusinessCenter'
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { useDispatch ,useSelector} from 'react-redux'
import { logout ,selectUser } from './features/userSlice'
import { auth } from './firebase'


export default function Header() {
 const dispatch = useDispatch() ; 
 const user = useSelector(selectUser) ; 
 const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
 } ;
    return (
        <div className = 'header'>
            <div className ="header_left">
                <img src='/images/linkedin.png' alt ="" />
                <div className="header_serach">
                    <SearchIcon/>
                    <input placeholder = "Search" type = "text "></input>
                </div>
            </div>
            <div className = 'header_right'>
                <HeaderOption Icon = {HomeIcon} tittle = "Home" />
                <HeaderOption Icon = {SupervisorAccountIcon} tittle = "My Network" />
                <HeaderOption Icon = {BusinessCenterIcon} tittle = "Jobs" />
                <HeaderOption Icon = {ChatIcon} tittle = "Messaging" />
                <HeaderOption Icon = {NotificationsIcon} tittle = "Notifications" />
                <HeaderOption avatar= {true}  onClick = {logoutOfApp} />
            </div>
        </div>
    )
}
