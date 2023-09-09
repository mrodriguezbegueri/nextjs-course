"use client";

import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { AuthContext, AuthReducer } from ".";
import {  signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

export interface AuthState {
}

const Auth_INITIAL_STATE: AuthState = {
  property: false,
};

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);

  const { data, status } = useSession()

    useEffect(() => {
      if (status === 'authenticated') {
        console.log(data.user)
      }
    
    }, [status])

    const logout = () => {
      signOut()
    }
    

  return (

      <AuthContext.Provider
        value={{
          ...state,
          logout
        }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider
