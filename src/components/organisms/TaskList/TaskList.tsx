import React from 'react'

import { Box, Button } from '@mui/material'

import { useTaskContext } from '@/contexts/tasks'

import TaskItem from '@/components/molecules/TaskItem/TaskItem'

import * as S from './styles'

const TaskList: React.FC = () => {
  const { tasksList, addTask } = useTaskContext()
  return (
    <S.TaskListContainer elevation={6}>
      <S.Title variant='h4'>My Tasks</S.Title>
      <S.AddButton variant='contained' onClick={addTask}>
        Add task
      </S.AddButton>

      {tasksList.length === 0 ? (
        <p>No task added</p>
      ) : (
        <S.BoxList>
          {tasksList.map(task => (
            <TaskItem task={task} key={task.id} />
          ))}
        </S.BoxList>
      )}
    </S.TaskListContainer>
  )
}

export default TaskList
