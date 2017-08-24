import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
  VOTE_COMMENT,
  CREATE_COMMENT,

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

    case CREATE_COMMENT:
    console.log(action.payload)
       return state;

    case VOTE_COMMENT:
    const id = action.payload.data.parentId

    return {
      ...state,
      [id]: state[id].map(comment => {
        if (comment.id === action.payload.data.id) {
          comment.voteScore = action.payload.data.voteScore
        }
        return comment
      })
    }


    default:
    return state;

  }
}
