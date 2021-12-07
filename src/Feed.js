import React ,{useEffect, useState} from 'react'
import './Feed.css'
import Post from './Post'

import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import db from './firebase'
import firebase from "firebase/compat/app"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'


function Feed() {
    const user = useSelector(selectUser) ;

    const [input, setinput] = useState("")
    const [posts , setPosts] = useState ([])

    useEffect(()=> {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id : doc.id,
                data : doc.data(),
            }))
        )
        )
    }, []) ; 

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name : user.displayName,
            description : user.email,
            message : input, 
            photoUrl : user.photoUrl || "",
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })

        setinput("") ;
    };
    return (
        <div className ="feed">
            <div className = "feed__inputContainer">
                <div className ="feed_input">
                    <CreateIcon />
                    <form>
                        <input value ={input} onChange = {e => setinput(e.target.value)} type ="text" />
                        <button onClick = {sendPost} type = "submit"> send </button>
                    </form>
                </div>

                <div className ="feed__inputOptions">
                    <InputOption Icon={ImageIcon} tittle ="photo" color ="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} tittle ="Video" color ="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} tittle ="Event" color ="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} tittle ="Write article" color ="#7FC15E" />
                </div>
            </div>

        {/*  Thats for posts */ }
        <FlipMove> 
        {posts.map(({id , data : {name , description , message , photoUrl}}) => (
            <Post
            key = {id}
            name = {name}
            description = {description}
            message = {message}
            photoUrl = {photoUrl}
             />
        ))}
     </FlipMove>
        </div>
    )
}

export default Feed
