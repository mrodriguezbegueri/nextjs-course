'use client'

import { FC, PropsWithChildren, useEffect, useMemo, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.'
import { Entry } from '@/interfaces'

export interface EntriesState {
   entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: []
}

const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

   const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
   
  const addNewEntry = ( description: string ) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: '[Entry]- Add-Entry', payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry]- Entry-Updated', payload: entry })
  }

  const refreshEntries = async () => {
    const res = await fetch('/api/entries')
    const entries: Entry[] = await res.json()
    dispatch({type: '[Entry]- Refresh-Data', payload: entries})
  }

  useEffect(() => {
    refreshEntries()
  }, [])

  //  const contextValue = useMemo(() => {
  //     // Tu lógica para calcular el valor del contexto aquí.
  //     return {
  //       ...state,

  //       // Methods
  //       addNewEntry
  //     };
  //   }, [state, addNewEntry]);
    
  return (<EntriesContext.Provider value={{
    ...state,

        // Methods
        addNewEntry,
        updateEntry
  }}>
       { children }
   </EntriesContext.Provider> )
}

export default EntriesProvider