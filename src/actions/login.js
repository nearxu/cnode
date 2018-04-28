import http from "../utils/http";

export const REQUEST_POST = "REQUEST_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const requestPosts = access => ({
  type: REQUEST_POST,
  access
});

const receivePosts = (access, json) => ({
  type: LOGIN_SUCCESS,
  json,
  access
});

const login = () => ({
  type: LOGIN_SUCCESS
});
export const fetchPostsIfNeeded = access => {
  return dispatch => {
    dispatch(login());
  };
};
