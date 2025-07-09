import { TasksList } from '../tasksList'

export type ListOfListsStructure = {
  id: number
  name: string
  value: TasksList
}

export interface UseManageListState {
  listOfLists: ListOfListsStructure[]

  createList: (listName: string) => void
  deleteList: (listId: number) => void
}
