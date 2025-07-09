import { createContext, useContext } from 'react'

import { UseManageListState } from './interface'

export const Context = createContext<UseManageListState | null>(null)

export const useManageListsContext = (): UseManageListState => {
  const value = useContext(Context)

  if (!value)
    throw new Error('useManageListsContext must be used insided TaskProvider')

  return value
}
