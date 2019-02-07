import React from 'react'
import styles from './article.css'

function Article({article, index, toggled}) {
    return (
        <div className="article">
            <div className="main-info">
                
                <h2 className="title"><span style={{color:'grey', fontSize:'17px'}}>{index}</span>{article.title}</h2>
                <div className="attributes">{article.attributes.map((attr, index) => <div key={index} className="attr">{attr}</div>)}</div>
            </div>
            <div className="description">{article.description}</div>
        </div>
    )
}


export default Article