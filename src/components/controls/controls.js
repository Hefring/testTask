import React from 'react'
import styles from './controls.css'


function Controls(props) {
    const {onDeleteFirstArticle, onDeleteLastArticle, onAddArticleToTop, onAddArticleToBot} = props;
    return (
        <div>
            <button onClick={onAddArticleToTop} className="btn">Добавить в начало</button>
            <button onClick={onAddArticleToBot} className="btn">Добавить в конец</button>
            <button onClick={onDeleteFirstArticle} className="btn">Удалить первый</button>
            <button onClick={onDeleteLastArticle} className="btn">Удалить последний</button>
        </div>
    )
}


export default Controls