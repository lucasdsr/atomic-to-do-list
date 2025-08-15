import { TasksList } from '../tasksList'

export type ListOfListsStructure = {
  id: number
  name: string
  value: TasksList
}

export interface UseManageListState {
  listOfLists: ListOfListsStructure[]

  getListsHead: () => void
  deleteList: (listId: number) => void
  createList: (listName: string) => void
}
