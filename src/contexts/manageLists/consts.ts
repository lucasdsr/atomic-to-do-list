import { ListOfListsStructure } from './interface'

export const contextDefaultValue = {
  listOfLists: [] as ListOfListsStructure[],

  createList: (listName: string) => {},
  deleteList: (listId: number) => {}
}

export const emptyListStructure = {
  id: 0,
  name: '',
  value: []
}

export const LOCAL_STORAGE_LISTS_KEY = '__TODO_LISTS'
