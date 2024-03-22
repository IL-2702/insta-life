import React, { SetStateAction, useState } from 'react'
import DatePicker from 'react-datepicker'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { TextField } from '@/shared/ui/Textfield'

import 'react-datepicker/dist/react-datepicker.css'

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const { t } = useTranslation()

  console.log(startDate)

  return (
    <DatePicker
      customInput={
        <TextField
          label={t.profileSettings.tab.generalInformation.form.dateOfBirthday}
          name={'calendar'}
        />
      }
      onChange={(date: any) => setStartDate(date)}
      selected={startDate}
    />
  )
}
