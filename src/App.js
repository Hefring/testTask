import React, { Component } from 'react';
import features from './data.json'
import ArticleList from './components/articleList/articleList'
import Controls from './components/controls/controls'
import AddForm from './components/addForm/addForm'
import ToggleInterface from './components/toggleInterface/toggleInterface'
import styles from './App.css'

class App extends Component {

  state = {
    articles : features.data,
    toggled: false
  }

  render() {

    const {articles, toggled} = this.state;

    return (
      <div className="app">
        <Controls 
          onDeleteFirstArticle={this.deleteFirstArticle} 
          onDeleteLastArticle={this.deleteLastArticle} 
          onAddArticleToTop={this.addArticleToTop} 
          onAddArticleToBot={this.addArticleToBot} 
        />
        <ToggleInterface onToggleInterface={this.toggleInterface} toggled={toggled}/>
        <ArticleList articles={articles} toggled={toggled} />
        <AddForm onNewArticle={this.addArticle}/>
      </div>
    );
  }

  toggleInterface = () => {
    this.setState({toggled: !this.state.toggled})
  }

  addArticle = (title, attr, description) => {
    const articles = [
      ...this.state.articles,
      {
        title: title,
        attributes: attr,
        description: description
      }
    ];
    this.setState({articles});
  }

  deleteFirstArticle = () => {
    const articles = this.state.articles.filter((article, index) => index !== 0);
    this.setState({articles}); 
  }
  deleteLastArticle = () => {
    const articlesLength = this.state.articles.length;
    const articles = this.state.articles.filter((article, index) => index !== articlesLength - 1);
    this.setState({articles}); 
  }
  addArticleToTop = () => { 
    const lastArticle = this.state.articles[this.state.articles.length - 1];

    if(lastArticle) {
      const articles = [
        lastArticle,
        ...this.state.articles
      ];
      this.setState({articles});
    }
    else {
      alert('Добавьте хотя бы одну статью');
    }
  }
  addArticleToBot = () => {
    const firstArticle = this.state.articles[0];

    if(firstArticle) {
      const articles = [
        ...this.state.articles,
        firstArticle
      ];
      this.setState({articles});
    }
    else {
      alert('Добавьте хотя бы одну статью');
    }
  }

}

export default App;
