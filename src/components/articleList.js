import React from 'react'
import Article from './article'

class ArticleList extends React.Component {
    render() {
        return (
            <div>
                {this.props.articles.map(article => 
                    <Article article={article} />)
                }
            </div>
        )
    }
}

export default ArticleList