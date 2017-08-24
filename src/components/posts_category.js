import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { upVote, downVote, getComments, deletePost, fetchByCategory } from '../actions';
import _ from 'lodash';


class PostsCategory extends Component {
  componentDidMount() {
    if(this.props.posts) {
　　　　　const { category }  = this.props.match.params;
　　　　　this.props.fetchByCategory(category)
        this.props.getComments();

    }
  }

  postDelete(id) {

   let ask = window.confirm("Do you really want to delete this post?");
   if (ask === false) {
     return;
   }
   else {
     this.props.deletePost(id, ()=> {
       this.props.history.push('/')
     })
   }
  }


  renderPosts() {

    return _.map(this.props.posts, post => {
      const { title, author, timestamp,id, voteScore, category, deleted } = post
      const time = new Date(timestamp).toLocaleDateString()
      const comments = this.props.comments ? this.props.comments[id] : null
      const noOfComments = comments ? comments.length : 0



      if (!deleted && post ) {
        return (
          <div className="read-detail" key={id}>
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil"><Link to={`/post/${id}/edit`}>edit</Link></span>
            </div>
            <Link to={`/${category}/${id}`}><h3>Title: {title}</h3></Link>

            <p className="lead"><span className="glyphicon glyphicon-user margin-right:10px"> {author}</span></p>

            <ul className="li-bundle">

              <li><span className="glyphicon glyphicon-time">{time}</span></li>
              <li><Link to={`/${category}/posts`}> {category}</Link></li>
              <li><span className="glyphicon glyphicon-comment"> {noOfComments}</span></li>
              <li><span className="glyphicon glyphicon-star-empty"></span> {voteScore}</li>
              <li onClick={() => this.props.upVote(id)} ><span className="glyphicon glyphicon glyphicon-thumbs-up cursor"></span></li>
              <li onClick={() => this.props.downVote(id)}><span className="glyphicon 	glyphicon glyphicon-thumbs-down cursor"></span></li>
              <li onClick={() => this.postDelete(id)}><span className="glyphicon glyphicon-remove-sign cursor"></span></li>
            </ul>
          </div>
        );
      } else {
        <h1>No Post</h1>
      }
    });
  };


  render() {
    console.log(this.props.posts)
     return (
     <div className="row">
      <div className="navigate-button">
       <Link to="/" className="btn btn-danger">Go back</Link>
       </div>
      {this.props.posts.length > 0
       ?<div className="col-md-12">
          {this.renderPosts()}
        </div>
     :
     <div className="col-md-12">
       <h2> No Post</h2>
    </div>}
    </div>
    );
  };
}

function mapStateToProps({ posts, comments}) {

  posts = _.sortBy(posts, 'voteScore').reverse();


  return { posts, comments }
};

export default connect(mapStateToProps, { upVote, downVote, getComments, deletePost,fetchByCategory})(PostsCategory);
