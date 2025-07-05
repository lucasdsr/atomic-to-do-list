import { useState } from 'react'

import { Box, TextField } from '@mui/material'

type InputType = {
  value?: string
  onChange: (value: string) => void
}

export const Input = ({ value = '', onChange }: InputType) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, setEditedValue] = useState(value)

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value
    setEditedValue(value)
  }

  const handleEditBlur = () => {
    onChange(editedValue?.trim())

    setIsEditing(false)
  }

  return (
    <Box>
      {isEditing ? (
        <TextField
          variant='standard'
          value={editedValue}
          onBlur={handleEditBlur}
          onChange={handleEditChange}
        />
      ) : (
        <Box
          onClick={() => setIsEditing(true)}
          sx={{
            display: 'flex',
            height: '20px',
            width: '100px',
            backgroundColor: 'white',
            color: 'black'
          }}
        >
          {value}
        </Box>
      )}
    </Box>
  )
}
