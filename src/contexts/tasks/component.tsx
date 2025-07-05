import React, { createContext } from 'react'

import { useTaskState } from './state'

import { contextDefaultValue } from './consts'

export const Context = createContext(contextDefaultValue)

export const TasksProvider = ({ children }) => {
  const tasksState = useTaskState()

  const value = { ...tasksState }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
