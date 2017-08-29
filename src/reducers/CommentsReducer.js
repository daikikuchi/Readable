import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
  VOTE_COMMENT,
  CREATE_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENT_DETAIL,
  EDIT_COMMENT
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, {
        [action.postId]: action.comments
      });

    case FETCH_COMMENT:
      return state;

    case FETCH_COMMENT_DETAIL:
      if (action.payload.data) {
        return action.payload.data;
      } else {
        return state;
      }

    case CREATE_COMMENT:
      if (action.payload) {
        const postid = action.payload.data.parentId;

        return {
          ...state,
          [postid]: [...state[postid], action.comment]
        };
      } else {
        return state;
      }

    case EDIT_COMMENT:
      if (action.payload) {
        const postId = action.payload.data.parentId;
        return {
          ...state,
          [postId]: state[postId].map(comment => {
            if (comment.id === action.payload.data.id) {
              return action.payload.comment;
            }
            return comment;
          })
        };
      } else {
        return state;
      }

    case VOTE_COMMENT:
      const id = action.payload.data.parentId;

      return {
        ...state,
        [id]: state[id].map(comment => {
          if (comment.id === action.payload.data.id) {
            comment.voteScore = action.payload.data.voteScore;
          }
          return comment;
        })
      };

    case DELETE_COMMENT:
      const { id: commentId, parentId: pId } = action.payload.data;

      return {
        ...state,
        [pId]: state[pId].filter(comment => comment.id !== commentId)
      };

    default:
      return state;
  }
}
