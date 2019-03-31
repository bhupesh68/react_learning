import {SIGN_IN, SIGN_OUT} from './types';

export const onSignIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
}

export const onSignOut = () => {
  return {
    type: SIGN_OUT
  };
}
