import { useContext } from "react"

import { Context } from "./component"
import { UseTaskStateState } from "./interface"

export const useTaskContext = (): UseTaskStateState => {
  const value = useContext(Context)
  
  if (!value) throw new Error('useTaskContext must be used insided TaskProvider')

  return value
}