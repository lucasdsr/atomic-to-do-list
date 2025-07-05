import React from 'react'

import { Box, Button } from '@mui/material'

import { useTaskContext } from '@/contexts/tasks'
import TaskItem from '@/components/molecules/TaskItem/TaskItem'

const TaskList: React.FC = () => {
  const { tasksList, addTask } = useTaskContext()
  return (
    <Box>
      <h2>Minhas Tarefas</h2>
      <Button onClick={addTask}>Adicionar tarefa</Button>

      {tasksList.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda!</p>
      ) : (
        <Box sx={{}}>
          {tasksList.map(task => (
            <TaskItem task={task} key={task.id} />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default TaskList
