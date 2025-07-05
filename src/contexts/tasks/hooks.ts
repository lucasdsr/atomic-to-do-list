import { useContext } from "react"
import { Context } from "./component"

export const useTaskContext = () => {
  const value = useContext(Context)

  if (!value) return new Error('useTaskContext must be used insided TaskProvider')

  return value
}