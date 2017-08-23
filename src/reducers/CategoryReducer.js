import {
FETCH_ALL_CATEGORY,
} from '../actions/types';

export default function(state = [], action) {

switch (action.type) {
case FETCH_ALL_CATEGORY:
   console.log("actionreceived" + action.payload)

   return action.payload.data.categories

 default:
   return state

  }
}
