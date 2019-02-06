import React from 'react'

function Article({article}) {
    return (
        <div>
            <div>
                <h2 className="title">{article.title}</h2>
                <div>{article.attributes.map(attr => <div className="attr">{attr}</div>)}</div>
            </div>
            
            <div className="description">{article.description}</div>
        </div>
    )
}


export default Article