import React from 'react'
import Article from '../article/article'
import styles from './articleList.css'

function ArticleList(props) {
    const {toggled} = props;
    return (
        <div className={toggled ? "card" : "list"}>
            {props.articles.map((article, index) => 
                <Article key={index} article={article} index={index+1} toggled={toggled}/>)
            }
        </div>
    )
}

export default ArticleList