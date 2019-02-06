import React from 'react'


function AddForm(props) {
    return (
        <div>
            <h3>Добавить новый объект</h3>
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button onClick={props.addArticle}>Добавить</button>
            </form>
        </div>
    )
}

function add(event) {
    event.preventDefault();
}

export default AddForm