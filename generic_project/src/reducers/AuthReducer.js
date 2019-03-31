import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INIT_STATE = {
  isSignedIn : null,
  userId: null
};
//reducer is executed whenever the first time program runs
//so INIT_STATE initialises a isSignedIn property
export  default (state=INIT_STATE,action) => {
  switch(action.type){
    case SIGN_IN:
      return {...state, isSignedIn:true, userId:action.payload};
    case SIGN_OUT:
      return {...state, isSignedIn:false, userId:null};
    default :
      return state;
  }
};
