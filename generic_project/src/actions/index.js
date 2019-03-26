import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
      dispatch({type:'FETCH_POSTS',payload:response.data})
};
  /*1. redux thunk allows to return a function from an action creator (normally ac returns JS object only).
  2. 'dispatch has unlimited power to change store data. get state - to get all data'
  return async function(dispatch, getState)
  3. *this can be done by call to dispatch again as per thunk picture -return {type: 'FETCH_POSTS',payload: promise
    */
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type:'FETCH_USER',payload:response});
  }
