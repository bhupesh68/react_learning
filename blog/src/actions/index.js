import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

//solve overfetching problem by having an action creator call othe raction creators
export const fetchPostsAndUsers = () => async (dispatch,getState) => {
  await  dispatch(fetchPosts());
  //fetchUser();
  // const userIDs = _.uniq(_.map(getState().posts, 'userId'));
  // userIDs.forEach(id => dispatch(fetchUser(id)));
  //1. no need to use await as there no statement/fucntion after this done
  //2.one can't use async woth forEach. Use {promise and then} for that
  _.chain(getState().posts, 'userId')
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  //dispatch feeds payload to the combineReducer to update the state
  //that then gets re-rendered
      dispatch({type:'FETCH_POSTS',payload:response.data})
};
  /*1. redux thunk allows to return a function from an action creator (normally ac returns JS object only).
  2. 'dispatch has unlimited power to change store data. get state - to get all data'
  return async function(dispatch, getState)
  3. *this can be done by call to dispatch again as per thunk picture -return {type: 'FETCH_POSTS',payload: promise
    */

export const fetchUser = id => async dispatch => {
     const response = await jsonPlaceholder.get(`/users/${id}`)
     dispatch({type:'FETCH_USER',payload:response.data});
   }

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//       const response = await jsonPlaceholder.get(`/users/${id}`)
//       dispatch({type:'FETCH_USER',payload:response.data})
//     });
