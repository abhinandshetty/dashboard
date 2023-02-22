import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Text = styled(Typography)`
  padding: 0 20px;
  font-size: 18px;
`

const WorkInProgress: FC = () => {
  return (
    <Grid display="flex" justifyContent="center" container textAlign="center">
      <Grid item xs={12}>
        <img
          alt="Work in progress"
          src="https://res.cloudinary.com/sapiocoder/image/upload/working_faayin.webp"
          style={{ width: 400 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Text>
          We are working on something awesome for you. We will notify you once this feature is
          ready.
        </Text>
      </Grid>
    </Grid>
  )
}

export default WorkInProgress
