import { Box, styled } from "@mui/material";

export const CompletedContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const OpenCompletedRow = styled(Box)`
  :hover {
    color: ${({ theme }) => theme.palette.grey[500]};
  }

  color: ${({ theme }) => theme.palette.grey[300]};
  font-weight: bold;
  margin-top: 24px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;

`

export const BoxList = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`