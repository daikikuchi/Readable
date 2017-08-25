import {
  FETCH_COMMENT,
  FETCH_COMMENTS,
  VOTE_COMMENT,
  CREATE_COMMENT,
  DELETE_COMMENT,

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
    console.log(action.payload)
    const postid = action.payload.data.parentId

   return {
     ...state,
     [postid]: [
       ...state[postid],
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

    case DELETE_COMMENT:
      console.log(action.payload.data)
			const { id: commentId, parentId: pId } = action.payload.data


    return {
      ...state,
      [pId]: state[pId].filter(comment => comment.id !== commentId)
    }




    default:
    return state;

  }
}
