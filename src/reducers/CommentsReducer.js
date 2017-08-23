import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
  COMMENT_UP_VOTE,
} from '../actions/types';


export default function (state = [], action) {

  switch (action.type) {
    case FETCH_COMMENTS:
      console.log("comments:" + action)
      return Object.assign({}, state, {
        [action.postId]: action.comments
      })

    case FETCH_COMMENT:
       return state;

    case COMMENT_UP_VOTE:
      console.log("action received" + action.payload.data.id)
      return {...state, [action.payload.data.id]: action.payload.data}

    default:
    return state;

  }
}
