import React from 'react'


function Controls(props) {
    return (
        <div>
            <button onClick={addToTop}>Добавить в начало</button>
            <button>Добавить в конец</button>
            <button>Удалить первый</button>
            <button>Удалить последний</button>
        </div>
    )
}

function addToTop() {
    console.log('buttom');

    
}


export default Controls