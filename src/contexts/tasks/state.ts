import { useCallback, useEffect, useState } from "react"

import { emptyTask, LOCAL_STORAGE_LISTS_KEY } from "./consts"
import { TasksList, UseTaskStateState } from "./interface"
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/manageLocalStorage"

export const useTaskState = (): UseTaskStateState => {
  const storagedList = getFromLocalStorage<TasksList>(LOCAL_STORAGE_LISTS_KEY) || []
  const [tasksList, setTasksList] = useState<TasksList>(storagedList)
  const [nextTaskId, setNextTaskId] = useState<number>(tasksList?.length + 1)

  const addTask = () => {
    setTasksList(curr => [...curr, { ...emptyTask, id: nextTaskId }])
    setNextTaskId(id => id + 1)
  }

  const editTask = (id: number, field: string, value: string) => {
    setTasksList((curr) => {
      const updatedList = curr.map((task) => (task.id === id ? { ...task, [field]: value } : task))
      saveToLocalStorage(LOCAL_STORAGE_LISTS_KEY, updatedList)
      return updatedList
    });
  };

  const deleteTask = (taskId: number) => setTasksList(curr => curr.filter(({ id }) => id !== taskId))

  const toggleTask = (taskId: number) => setTasksList(curr => curr.reduce((acc, item) => {
    if (item.id === taskId) return  [ ...acc, { ...item, completed: !item.completed } ]
    return [ ...acc, item  ]
  }, [] as TasksList))

  useEffect(() => {
    saveToLocalStorage(LOCAL_STORAGE_LISTS_KEY, tasksList)
  }, [tasksList])

  return {
    tasksList,

    addTask,
    editTask,
    deleteTask,
    toggleTask,
  }
}