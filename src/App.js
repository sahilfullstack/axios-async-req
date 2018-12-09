import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import CreatePost2 from './containers/CreatePost2';
import CreatePost3 from './containers/CreatePost3';

import PostList from './containers/PostList';
import PostList2 from './containers/PostList2';
import PostList3 from './containers/PostList3';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
        <div className="row" style={ stylesApp }>
        <div className="col-md-6">
            <CreatePost2 />
          </div>
          <div className="col-md-6">
            <PostList2 />
          </div>
        </div>
        <div className="row" style={ stylesApp }>
        <div className="col-md-6">
            <CreatePost3 />
          </div>
          <div className="col-md-6">
            <PostList3 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;