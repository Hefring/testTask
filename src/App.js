import React, { Component } from 'react';
import features from './data.json'
import ArticleList from './components/articleList'
import Controls from './components/controls'
import AddForm from './components/addForm'

class App extends Component {

  state = {

  }

  render() {
    return (
      <div>
        <Controls />
        <ArticleList articles={features.data} />
        <AddForm addArticle={this.addArticle}/>
      </div>
    );
  }

  addArticle = () => {
    console.log('add');
  }

}

export default App;
