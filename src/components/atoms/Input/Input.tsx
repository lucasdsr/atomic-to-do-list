import { useState } from 'react'

import * as S from './styles'
import { Typography, useTheme } from '@mui/material'

type InputType = {
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

export const Input = ({ value = '', onChange, placeholder }: InputType) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, setEditedValue] = useState(value)

  const theme = useTheme()

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
    <S.InputContainer onBlur={() => console.log('blured')}>
      {isEditing ? (
        <S.InputField
          autoFocus
          variant='standard'
          value={editedValue}
          onBlur={handleEditBlur}
          onChange={handleEditChange}
        />
      ) : (
        <S.InputBox onBlur={handleEditBlur} onClick={() => setIsEditing(true)}>
          {value ? (
            <Typography color={theme.palette.grey[300]}>{value}</Typography>
          ) : (
            <Typography color={theme.palette.grey[600]}>
              {placeholder}
            </Typography>
          )}
        </S.InputBox>
      )}
    </S.InputContainer>
  )
}
