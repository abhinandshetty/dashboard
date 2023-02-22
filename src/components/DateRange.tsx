import React, { FC, useState } from 'react'
import { DateRange as DR, DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'

const DateRange: FC<{ onRangeSelected: (value: DR<null>) => void }> = ({ onRangeSelected }) => {
  const [dateRange, setDateRange] = useState<DR<null>>([null, null])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={dateRange}
        onAccept={onRangeSelected}
        onChange={setDateRange}
        renderInput={(startProps, endProps) => (
          <>
            <TextField size="small" {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField size="small" {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  )
}

export default DateRange
