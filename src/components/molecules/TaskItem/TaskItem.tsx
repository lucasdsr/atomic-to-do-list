import { useEffect, useState } from 'react'

import { Box, Button, Checkbox } from '@mui/material'

import { Input } from '@/components/atoms'
import { Task, useTaskContext } from '@/contexts/tasks'

import * as S from './styles'
import CompletedTasksList from '@/components/organisms/CompletedTasksList/CompletedTasksList'

const TaskItem: React.FC<{ task: Task; isVisible?: boolean }> = ({
  task,
  isVisible: isVisibleOutside = true
}) => {
  const [title, setTitle] = useState(task.title)
  const [isVisible, setIsVisible] = useState(true)
  const [description, setDescription] = useState(task.description)

  const { toggleTask, deleteTask, editTask } = useTaskContext()

  const handleTitleChange = (value: string) => {
    setTitle(value)
    editTask(task.id, 'title', value)
  }

  const handleDescriptionChange = (value: string) => {
    setDescription(value)
    editTask(task.id, 'description', value)
  }

  const handleDelete = () => {
    setIsVisible(false)

    setTimeout(() => deleteTask(task.id), 500)
  }

  return (
    <S.TaskItemContainer
      isVisible={isVisible && isVisibleOutside}
      elevation={2}
    >
      <Checkbox
        id={task.id.toString()}
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <S.InputRow>
        <Input placeholder='Title' value={title} onChange={handleTitleChange} />
        <Input
          value={description}
          placeholder='Description'
          onChange={handleDescriptionChange}
        />
      </S.InputRow>
      <S.Close onClick={handleDelete} />
    </S.TaskItemContainer>
  )
}

export default TaskItem
