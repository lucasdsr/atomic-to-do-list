import React from 'react'

import { Box, Button } from '@mui/material'

import { useTaskContext } from '@/contexts/tasks'

import TaskItem from '@/components/molecules/TaskItem/TaskItem'

import * as S from './styles'

const TaskList: React.FC = () => {
  const { tasksList, addTask } = useTaskContext()
  return (
    <S.TaskListContainer elevation={6}>
      <h2>Minhas Tarefas</h2>
      <Button onClick={addTask}>Adicionar tarefa</Button>

      {tasksList.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda!</p>
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
