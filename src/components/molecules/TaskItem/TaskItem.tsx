import { useState } from 'react'

import { Box, Button, Checkbox } from '@mui/material'

import { Input } from '@/components/atoms'
import { Task, useTaskContext } from '@/contexts/tasks'

import * as S from './styles'

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const [title, setTTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  const { toggleTask, deleteTask } = useTaskContext()

  return (
    <S.TaskItemContainer elevation={2}>
      <Checkbox
        id={task.id.toString()}
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <S.InputRow>
        <Input placeholder='Title' value={title} onChange={setTTitle} />
        <Input
          value={description}
          placeholder='Description'
          onChange={setDescription}
        />
      </S.InputRow>
      <S.Close onClick={() => deleteTask(task.id)} />
    </S.TaskItemContainer>
  )
}

export default TaskItem
