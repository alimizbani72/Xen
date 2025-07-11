'use client'

import { Icon } from '@/components/Icon'
import { InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
interface RHFSelectProps {
  name: string
  label?: string
}

export const RHFSelect = ({ name, label }: RHFSelectProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={'plan'}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack width="100%">
          {label && (
            <InputLabel
              sx={{
                typography: 'body2-medium',
                color: 'common.white',
                mb: 1,
              }}
              htmlFor={name}
            >
              {label}
            </InputLabel>
          )}
          <Select
            {...field}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            IconComponent={() => (
              <Icon name="chevron-left" sx={{ transform: 'rotate(270deg)', mr: 4 }} color="#E8E8E8" />
            )}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      )}
    />
  )
}
