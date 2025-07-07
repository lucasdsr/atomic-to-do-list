import { Box, Container, styled, TextField, Typography } from "@mui/material";

export const InputContainer = styled(Container)`
  width: 437px;
  padding: 0px 8px !important;
`

export const InputField = styled(TextField)`
  width: 100%;
  padding: 0px !important;
`

export const InputBox = styled(Box)`
  align-items: center;
  display: flex;
  width: 100%;
  height: 32px;
`

export const InputText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`