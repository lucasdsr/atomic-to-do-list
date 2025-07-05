import React, { createContext, PropsWithChildren } from 'react'

import { useTaskState } from './state'

import { contextDefaultValue } from './consts'
import { UseTaskStateState } from './interface'

export const Context = createContext<UseTaskStateState | null>(null)

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const tasksState = useTaskState()

  const value = { ...tasksState }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
