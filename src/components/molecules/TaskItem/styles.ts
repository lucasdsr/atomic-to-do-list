import { Box, Paper, styled } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close'

export const TaskItemContainer = styled(Paper)`
  min-height: 76px;
  padding: 12px;
  gap: 8px;
  display: flex;
  alignItems: 'center';
  margin-right: 12px;
  background-color: inherit;
  justify-content: space-between;
`

export const Close = styled(CloseIcon)`
  align-self: center;
  cursor: pointer;
`

export const InputRow = styled(Box)`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`