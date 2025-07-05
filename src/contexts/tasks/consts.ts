import { TasksList } from "./interface";

export const contextDefaultValue = {
  tasksList: [] as TasksList
}

export const emptyTask = {
  title: '',
  description: '',
  completed: false,
}