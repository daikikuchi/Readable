import _ from 'lodash';
import { FETCH_POSTS,
FETCH_BY_CATEGORY,
FETCH_POST,
CREATE_POST,
UP_VOTE,
DOWN_VOTE,
EDIT_POST,
DELETE_POST,
FETCH_POST_EDIT,
} from '../actions/types';

export default function(state = {}, action) {

  console.log('Action received', action)
  switch (action.type) {
     case FETCH_POSTS:

      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
        console.log(action.payload.data)
          //  return action.payload.data
        return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POST_EDIT:
         console.log(action.payload.data)
        return action.payload.data

    case CREATE_POST:
       console.log(action.payload)
       return state;

    case EDIT_POST:
         console.log('Edit Action received'+ action.payload)
         return state;


    case DELETE_POST:
        return _.omit(state, action.payload);


    case FETCH_BY_CATEGORY:
          console.log(action)
          return action.payload.data


     case UP_VOTE:

     return {...state, [action.payload.data.id]: action.payload.data}

     case DOWN_VOTE:


     return {...state, [action.payload.data.id]: action.payload.data}


      default:
           return state;
  }
}
