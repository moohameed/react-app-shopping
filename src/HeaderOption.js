import React from 'react'
import './HeaderOption.css'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function HeaderOption(props) {
    const user = useSelector(selectUser) ;
    
    
    
    return (
        <div onClick = {props.onClick} className = 'headerOption'>
                {props.Icon && <props.Icon className="header_option_icon" />}
                
           
            {props.avatar && (
                <Avatar className="header_option_icon">{user?.email[0]}</Avatar>
            )

            }
                <h3 className='headerOption_tittle'>{props.tittle}</h3>
            
        </div>
    )
}

export default HeaderOption
