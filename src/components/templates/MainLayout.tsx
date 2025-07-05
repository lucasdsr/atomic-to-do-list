import { TasksProvider } from '@/contexts/tasks'
import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

export const MainLayout = ({ children }: PropsWithChildren) => (
  <TasksProvider>
    <Container>{children}</Container>
  </TasksProvider>
)
