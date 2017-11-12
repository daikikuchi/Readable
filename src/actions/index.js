import axios from 'axios';

import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_BY_CATEGORY,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE,
  DOWN_VOTE,
  FETCH_ALL_CATEGORY,
  FETCH_COMMENT,
  FETCH_COMMENTS,
  FETCH_COMMENT_DETAIL,
  FETCH_POST_EDIT,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
  SORT_POSTS_DATE,
  SORT_POSTS_VOTE
} from './types';

const ROOT_URL = 'http://localhost:5001';
const headers = { headers: { Authorization: 'Javascript' } };

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`, headers);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function sortPosts(value) {
  const request = axios.get(`${ROOT_URL}/posts`, headers);
  if (value === 'date') {
    return {
      type: SORT_POSTS_DATE,
      payload: request
    };
  } else {
    return {
      type: SORT_POSTS_VOTE,
      payload: request
    };
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`, headers);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchPostEdit(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`, headers);

  return {
    type: FETCH_POST_EDIT,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts`, values, headers)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}`, headers).then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function editPost(id, values, callback) {
  const request = axios
    .put(`${ROOT_URL}/posts/${id}`, values, headers)
    .then(() => callback());

  return {
    type: EDIT_POST,
    payload: request
  };
}

export function fetchAllCategory(category) {
  const request = axios.get(`${ROOT_URL}/categories`, headers);

  return {
    type: FETCH_ALL_CATEGORY,
    payload: request
  };
}

export function fetchByCategory(category) {
  const request = axios.get(`${ROOT_URL}/${category}/posts`, headers);

  return {
    type: FETCH_BY_CATEGORY,
    payload: request
  };
}

export function upVote(id) {
  const request = axios.post(
    `${ROOT_URL}/posts/${id}`,
    { option: 'upVote' },
    headers
  );

  return {
    type: UP_VOTE,
    payload: request
  };
}

export function downVote(id) {
  const request = axios.post(
    `${ROOT_URL}/posts/${id}`,
    { option: 'downVote' },
    headers
  );

  return {
    type: DOWN_VOTE,
    payload: request
  };
}

export function voteComment(id, option) {
  const request = axios.post(`${ROOT_URL}/comments/${id}`, { option }, headers);

  return {
    type: VOTE_COMMENT,
    payload: request
  };
}

export function createComment(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/comments`, values, headers)
    .then(() => callback());

  return {
    type: CREATE_COMMENT,
    payload: request
  };
}

export function editComment(id, values, callback) {
  const request = axios
    .put(`${ROOT_URL}/comments/${id}`, values, headers)
    .then(() => callback());

  return {
    type: EDIT_COMMENT,
    payload: request
  };
}

export function deleteComment(id, callback) {
  const request = axios.delete(`${ROOT_URL}/comments/${id}`, headers);

  return {
    type: DELETE_COMMENT,
    payload: request
  };
}

export function getComment(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}/comments`, headers);
  return {
    type: FETCH_COMMENT,
    payload: request
  };
}

export function getCommentDetail(id) {
  const request = axios.get(`${ROOT_URL}/comments/${id}`, headers);

  return {
    type: FETCH_COMMENT_DETAIL,
    payload: request
  };
}

export const getComments = function() {
  return dispatch => {
    axios.get(`${ROOT_URL}/posts`, headers).then(response => {
      const postIds = response.data.map(post => post.id);

      postIds.reverse().forEach(id => {
        axios
          .get(`${ROOT_URL}/posts/${id}/comments`, headers)
          .then(response => {
            dispatch({
              type: FETCH_COMMENTS,
              comments: response.data,
              postId: id
            });
          });
      });
    });
  };
};
