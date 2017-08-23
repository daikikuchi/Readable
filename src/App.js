import React, { Component } from 'react';
import {Route, Link,Switch} from 'react-router-dom'
import PostsIndex from './components/posts_index';
import PostsCategory from './components/posts_category';
import PostDetail from './components/post_detail';
import PostsForm from  './components/posts_form';



class App extends Component {
  render() {
    return (
<div>
  <div className="header">
        <Link className="link-to-index" to="/"><h1>Readable</h1></Link>
  </div>
      <div className="container text-center">
      <Switch>
        <Route exact path="/" render={() => <PostsIndex/>}/>
        <Route exact path= "/posts/new" component={PostsForm}/>
        <Route exact path="/:category/posts" component={PostsCategory}/>
        <Route exact path = "/post/:id/edit" component={PostsForm}/>
        <Route exact path = "/:category/:id" component={PostDetail}/>
      </Switch>
      </div>
</div>
    );
  }
}

export default App;
