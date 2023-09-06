'use client'

import { FC, PropsWithChildren, useMemo, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.'
import { Entry } from '@/interfaces'

export interface EntriesState {
   entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: [
    {
        _id: uuidv4(),
        description: 'PENDIENTE: Description 1',
        status: 'pending',
        createdAt: Date.now()
    },
    {
        _id: uuidv4(),
        description: 'EN-PROGRESO: Description 2',
        status: 'in-progress',
        createdAt: Date.now() - 1000000
    },
    {
        _id: uuidv4(),
        description: 'TERMINADA: Description 3',
        status: 'finished',
        createdAt: Date.now() - 100000
    },
   ]
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