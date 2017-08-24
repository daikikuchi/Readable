import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
  VOTE_COMMENT,
  CREATE_COMMENT,

} from '../actions/types';


export default function (state = [], action) {
  console.log('Action received', action)
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log("comments:" + action)
      return Object.assign({}, state, {
        [action.postId]: action.comments
      })

    case FETCH_COMMENT:
       return state;

    case CREATE_COMMENT:
    const postId = action.payload.data.parentId
    console.log(action.payload)
    console.log(postId)

   return {
     ...state,
     [postId]: [
       ...state[postId],
       action.comment,
     ]
   }

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
