import { AuthState } from '.';

type AuthActionType = { type: '[Auth]- session' } | { type: '[Auth]- logout' }

export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    // case '[Auth]- session':
    //   return {
    //     ...state,
    //   };
      // case '[Auth]- logout':
      // return {
      //   ...state,
      // };

    default:
      return state
  }
};