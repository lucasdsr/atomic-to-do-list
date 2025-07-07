import React, { useState } from 'react'

import { useTaskContext } from '@/contexts/tasks'

import TaskItem from '@/components/molecules/TaskItem/TaskItem'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import * as S from './styles'
import { Icon } from '@mui/material'

const CompletedTasksList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { completedTasks } = useTaskContext()

  if (!completedTasks.length) return null

  return (
    <S.CompletedContainer>
      <S.OpenCompletedRow onClick={() => setIsOpen(!isOpen)}>
        Completed tasks
        <Icon fontSize='medium'>
          {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </Icon>
      </S.OpenCompletedRow>
      {isOpen && (
        <S.BoxList>
          {completedTasks.map(task => (
            <TaskItem task={task} key={task.id} />
          ))}
        </S.BoxList>
      )}
    </S.CompletedContainer>
  )
}

export default CompletedTasksList
