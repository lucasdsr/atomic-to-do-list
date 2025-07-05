import { useState } from 'react'

import { Box, Button, Checkbox } from '@mui/material'

import { Input } from '@/components/atoms'
import { Task, useTaskContext } from '@/contexts/tasks'

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const [title, setTTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  const { toggleTask, deleteTask } = useTaskContext()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Checkbox
        id={task.id.toString()}
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <Input value={title} onChange={setTTitle} />
      <Input value={description} onChange={setDescription} />
      <Button variant='contained' onClick={() => deleteTask(task.id)}>
        Remover
      </Button>
    </Box>
  )
}

export default TaskItem
