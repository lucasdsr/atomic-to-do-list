import { createContext, useContext } from 'react'

import { UseTaskListState } from './interface'

export const Context = createContext<UseTaskListState | null>(null)

export const useTaskContext = (): UseTaskListState => {
  const value = useContext(Context)

  if (!value)
    throw new Error('useTaskContext must be used insided TaskProvider')

  return value
}
