export type Task = {
  id: number,
  title: string
  description?: string
  completed: boolean
}

export type TasksList = Task[]

export interface UseTaskStateState {
  tasksList: TasksList

  addTask: VoidFunction
  deleteTask: (taskId: number) => void 
  completeTask: (taskId: number) => void
}
