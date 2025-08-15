import { ElementType } from 'react'
import { SvgIconProps } from '@mui/material'

export type SidebarItems = {
  id: string
  title: string
  Icon: ElementType<SvgIconProps>
}[]
