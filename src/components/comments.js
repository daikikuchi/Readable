import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link,withRouter} from 'react-router-dom';
import { getComments,getComment,voteComment,deleteComment } from '../actions';

class Comments extends Component {
  componentDidMount() {
      const {id} = this.props;
      this.props.getComment(id);
  }


  commentDelete(id) {
   let ask = window.confirm("Do you really want to delete this comment?");
   if (ask === false) {
     return;
   }
   else {
     this.props.deleteComment(id, ()=> {
       this.props.history.push('/')
     })
   }
  }


  renderComments() {
  return this.props.selectedComments.map((comment) => {
      console.log(comment)
      if(comment) {
      const { author,voteScore,id,body,timestamp,parentId } = comment
      console.log(id)
      const time = new Date(timestamp)
      const formatted = time.toLocaleDateString()
     return (

       <div className="read-detail" key={id}>
           <h5 className="author-name"><span className="glyphicon glyphicon-user margin-right:10px">{author}</span></h5>
           <h4>{body}</h4>

         <ul className="li-bundle">

            <li>{formatted}</li>
           <li><span className="glyphicon glyphicon-star-empty"></span> {voteScore}</li>
           <li onClick={() => this.props.voteComment(id,'upVote')}><span className="glyphicon glyphicon glyphicon-thumbs-up cursor"></span></li>
           <li onClick={() => this.props.voteComment(id,'downVote')}><span className="glyphicon glyphicon glyphicon-thumbs-down cursor"></span></li>
           <li onClick={() => this.commentDelete(id) }><span className="glyphicon glyphicon-remove-sign cursor"></span></li>
         </ul>
       </div>

     )} else {
       return
     }
  });
}

render() {
console.log(this.props.selectedComments)

  return (
   <div>



      {this.props.selectedComments
        ?<div>
         {this.renderComments()}
         </div>
       : <div>
        <h2> No Comments </h2>
       </div>}


   </div>
  )
  }
}

function mapStateToProps({ comments },ownProps) {
   console.log(comments)
  const selectedComments = (comments[ownProps.match.params.id])
  console.log(selectedComments)
  return { selectedComments  }
};

export default withRouter(connect(mapStateToProps, {getComments,getComment,voteComment,deleteComment })(Comments));
