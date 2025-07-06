import { Box, Container, Paper, styled } from "@mui/material";

export const TaskListContainer = styled(Paper)`
  min-width: 554px;
  padding: 24px;
  padding-right: 12px;
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