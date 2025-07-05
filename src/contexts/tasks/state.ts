import { useCallback, useState } from "react"

import { emptyTask } from "./consts"
import { TasksList, UseTaskStateState } from "./interface"

export const useTaskState = (): UseTaskStateState => {
  const [tasksList, setTasksList] = useState<TasksList>([])
  const [nextTaskId, setNextTaskId] = useState<number>(tasksList?.length + 1)

  const addTask = () => {
    setTasksList(curr => [...curr, { ...emptyTask, id: nextTaskId }])
    setNextTaskId(id => id + 1)
  }

  const editTask = (id: number, field: string, value: string) => {
    setTasksList((curr) =>
      curr.map((task) => (task.id === id ? { ...task, [field]: value } : task))
    );
  };

  const deleteTask = (taskId: number) => setTasksList(curr => curr.filter(({ id }) => id !== taskId))

  const toggleTask = (taskId: number) => setTasksList(curr => curr.reduce((acc, item) => {
    if (item.id === taskId) return  [ ...acc, { ...item, completed: !item.completed } ]
    return [ ...acc, item  ]
  }, [] as TasksList))

  return {
    tasksList,

    addTask,
    editTask,
    deleteTask,
    toggleTask,
  }
}