import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

const Box = styled.div`
  -webkit-box-shadow: 4px 8px 29px -4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 8px 29px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 8px 29px -4px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
`

const Label = styled.div`
  margin: 10px 0;
`

const Value = styled.div`
  margin: 10px 0;
  font-size: 28px;
  font-weight: 600;
`

const StatInfo: FC<{ label: ReactNode; value: string | number }> = ({ label, value }) => {
  return (
    <Box>
      <Label data-testid="label">{label}</Label>
      <Value data-testid="value">{value}</Value>
    </Box>
  )
}

export default StatInfo
