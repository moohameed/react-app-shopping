import React from 'react'
import './InputOption.css'



function InputOption({Icon , tittle,color }) {
    return (
        <div className ="inputOption">
            <Icon style = {{color : color }} />
            <h4>{tittle}</h4>
        </div>
    )
}

export default InputOption
