import React, { createContext, PropsWithChildren } from 'react'

import { useTaskListState } from './state'

import { contextDefaultValue } from './consts'
import { UseTaskListState } from './interface'

export const Context = createContext<UseTaskListState | null>(null)

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const tasksState = useTaskListState()

  const value = { ...tasksState }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
