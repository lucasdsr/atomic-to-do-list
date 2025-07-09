import React, { PropsWithChildren } from 'react'

import { useManageListState } from './state'

import { Context } from './hooks'

export const ManageListsProvider = ({ children }: PropsWithChildren) => {
  const listState = useManageListState()

  const value = { ...listState }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
