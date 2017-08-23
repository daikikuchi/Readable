import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import CommentsReducer from './CommentsReducer'
import CategoryReducer from './CategoryReducer'

export default combineReducers({
    posts: PostReducer,
    categories: CategoryReducer,
    form:  formReducer,
    comments: CommentsReducer,

});
