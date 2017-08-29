import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_BY_CATEGORY,
  FETCH_POST,
  CREATE_POST,
  SORT_POSTS_DATE,
  SORT_POSTS_VOTE,
  UP_VOTE,
  DOWN_VOTE,
  EDIT_POST,
  DELETE_POST,
  FETCH_POST_EDIT
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case SORT_POSTS_DATE:
      const postsDate = _.sortBy(action.payload.data, 'timestamp').reverse();
      return _.mapKeys(postsDate, 'id');

    case SORT_POSTS_VOTE:
      const postsVote = _.sortBy(action.payload.data, 'voteScore').reverse();
      return _.mapKeys(postsVote, 'id');

    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POST_EDIT:
      return action.payload.data;

    case CREATE_POST:
      return state;

    case EDIT_POST:
      return state;

    case DELETE_POST:
      return _.omit(state, action.payload);

    case FETCH_BY_CATEGORY:
      return action.payload.data;

    case UP_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case DOWN_VOTE:
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
