"use client"

import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from '.'

export interface UIState {
   sideMenuOpen: boolean,
   isAddingEntry: boolean,
   isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
   sideMenuOpen: false,
   isAddingEntry: false,
   isDragging: false
}


const UIProvider:FC<PropsWithChildren> = ({ children }) => {

   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

   const openSideMenu = () => {
      dispatch({ type: '[UI]- Open Side Bar' })
   }
   
   const closeSideMenu = () => {
      dispatch({ type: '[UI]- Close Side Bar' })
   }

   const setIsAddingEntry = (isAdding: boolean) => {
      dispatch({type: '[UI]- Set isAdding Entry', payload: isAdding})
   }
   
   const startDragging = () => {
      dispatch({type: '[UI]- Start Dragging'})
   }
   
   const endDragging = () => {
      dispatch({type: '[UI]- End Dragging'})
   }

  return (
    <UIContext.Provider value={{
       ...state,

       // Methods
       openSideMenu,
       closeSideMenu,
       setIsAddingEntry,
       startDragging,
       endDragging
    }}>
       { children }
   </UIContext.Provider>
  )
}

export default UIProvider