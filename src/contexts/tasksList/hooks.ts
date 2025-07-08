import { useContext } from 'react'

import { Context } from './component'
import { UseTaskListState } from './interface'

export const useTaskContext = (): UseTaskListState => {
  const value = useContext(Context)

  if (!value)
    throw new Error('useTaskContext must be used insided TaskProvider')

  return value
}
