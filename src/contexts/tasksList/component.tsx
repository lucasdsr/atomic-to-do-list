import React, { PropsWithChildren } from 'react'

import { useTaskListState } from './state'

import { Context } from './hooks'

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const tasksState = useTaskListState()

  const value = { ...tasksState }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
