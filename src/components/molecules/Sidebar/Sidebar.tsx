import { useManageListsContext } from '@/contexts/manageLists'
import { Drawer } from '@mui/material'
import { DrawerList } from './DrawerList'
import { useMemo } from 'react'

export const Sidebar = () => {
  const { getListsHead } = useManageListsContext()

  const items = useMemo(() => getListsHead() || [], [getListsHead])

  return (
    <Drawer>
      <DrawerList items={items} />
    </Drawer>
  )
}
