import { Box, Button, Paper, styled, Typography } from "@mui/material";

export const Title = styled(Typography)`
  color: white
`

export const AddButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main}
`

export const TaskListContainer = styled(Paper)`
  gap: 24px;
  padding: 24px;
  display: flex;
  min-width: 554px;
  padding-right: 12px;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.secondary.main}
`
  
export const BoxList = styled(Box)`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`