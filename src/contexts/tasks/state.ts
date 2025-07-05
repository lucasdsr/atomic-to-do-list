import { useState } from "react"

import { emptyTask } from "./consts"
import { TasksList, UseTaskStateState } from "./interface"

export const useTaskState = (): UseTaskStateState => {
  const [tasksList, setTasksList] = useState<TasksList>([])
  const [nextTaskId, setNextTaskId] = useState<number>(tasksList?.length + 1)

  const addTask = () => {
    setTasksList(curr => [...curr, { ...emptyTask, id: nextTaskId }])
    setNextTaskId(id => id++)
  }

  const deleteTask = (taskId: number) => setTasksList(curr => curr.filter(({ id }) => id !== taskId))

  const completeTask = (taskId: number) => setTasksList(curr => curr.reduce((acc, item) => {
    if (item.id === taskId) return { ...acc, completed: true }
    return acc
  }, [] as TasksList))

  return {
    tasksList,

    addTask,
    deleteTask,
    completeTask,
  }
}