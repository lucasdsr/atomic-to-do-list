import { useState } from 'react'

import { emptyListStructure } from './consts'
import { ListOfListsStructure, UseManageListState } from './interface'

export const useManageListState = (): UseManageListState => {
  const [listOfLists, setListOfLists] = useState<ListOfListsStructure[]>([])
  const [nextListId, setNextListId] = useState<number>(listOfLists.length + 1)

  const createList = (name: string) => {
    setListOfLists(curr => [
      ...curr,
      { ...emptyListStructure, id: nextListId, name, value: [] }
    ])
    setNextListId(id => id + 1)
  }

  const deleteList = (listId: number) =>
    setListOfLists(curr => curr.filter(({ id }) => id !== listId))

  return {
    listOfLists,

    createList,
    deleteList
  }
}
