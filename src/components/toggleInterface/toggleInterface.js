import React from 'react'
import styles from './toggleInterface.css'

function ToggleInterface(props) {
    return (
        <div className="toggle">
            Список объектов
            <div className="buttons">                
                <button onClick={props.onToggleInterface}>{props.toggled ? "Список" : "Карточки"}</button>
            </div>
        </div>
    )
}

export default ToggleInterface