import React, { useEffect, useState } from 'react'

import { useTaskContext } from '@/contexts/tasks'

import TaskItem from '@/components/molecules/TaskItem/TaskItem'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import * as S from './styles'
import { Button, Icon } from '@mui/material'

const CompletedTasksList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const { completedTasks, clearConfirmedTasks } = useTaskContext()

  console.log('isVisible', isVisible)

  if (!completedTasks.length) return null

  const handleOpenCompleted = () => {
    setIsVisible(true)
    setIsOpen(!isOpen)
  }

  const handleDelete = () => {
    setIsVisible(false)

    setTimeout(() => {
      clearConfirmedTasks()
      setIsVisible(true)
      setIsOpen(false)
    }, 500)
  }

  return (
    <S.CompletedContainer>
      <S.OpenCompletedRow onClick={handleOpenCompleted}>
        Completed tasks ({completedTasks.length})
        <Icon fontSize='medium'>
          {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </Icon>
      </S.OpenCompletedRow>
      {isOpen && (
        <S.BoxList>
          <S.ClearButton
            color='secondary'
            variant='outlined'
            onClick={handleDelete}
          >
            clear all
          </S.ClearButton>
          {completedTasks.map(task => (
            <TaskItem task={task} key={task.id} isVisible={isVisible} />
          ))}
        </S.BoxList>
      )}
    </S.CompletedContainer>
  )
}

export default CompletedTasksList
