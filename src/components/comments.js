import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  getComments,
  getComment,
  voteComment,
  deleteComment
} from '../actions';

class Comments extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.getComment(id);
  }

  commentDelete(id) {
    let ask = window.confirm('Do you really want to delete this comment?');
    if (ask === false) {
      return;
    } else {
      this.props.deleteComment(id, () => {
        this.props.history.push('/');
      });
    }
  }

  renderComments() {
    return this.props.selectedComments.map(comment => {
      if (comment) {
        const { author, voteScore, id, body, timestamp } = comment;
        const time = new Date(timestamp);
        const formatted = time.toLocaleDateString();
        return (
          <div className="read-detail" key={id}>
            <div className="edit-post">
              <span className="glyphicon glyphicon-pencil">
                <Link to={`/edit/comment/${id}`}>edit</Link>
              </span>
            </div>
            <h5 className="author-name">
              <span className="glyphicon glyphicon-user margin-right:10px">
                {author}
              </span>
            </h5>
            <h4>
              {body}
            </h4>

            <ul className="li-bundle">
              <li>
                {formatted}
              </li>
              <li>
                <span className="glyphicon glyphicon-star-empty" />
                {voteScore}
              </li>
              <li onClick={() => this.props.voteComment(id, 'upVote')}>
                <span className="glyphicon glyphicon glyphicon-thumbs-up cursor" />
              </li>
              <li onClick={() => this.props.voteComment(id, 'downVote')}>
                <span className="glyphicon glyphicon glyphicon-thumbs-down cursor" />
              </li>
              <li onClick={() => this.commentDelete(id)}>
                <span className="glyphicon glyphicon-remove-sign cursor" />
              </li>
            </ul>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div>
        {this.props.selectedComments
          ? <div>
              {this.renderComments()}
            </div>
          : <div>
              <h2>No Comments</h2>
            </div>}
      </div>
    );
  }
}

function mapStateToProps({ comments }, ownProps) {
  const selectedComments = comments[ownProps.match.params.id];
  return { selectedComments };
}

export default withRouter(
  connect(mapStateToProps, {
    getComments,
    getComment,
    voteComment,
    deleteComment
  })(Comments)
);
