import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { TextField } from '@/shared/ui/Textfield'
import { enUS, ru } from 'date-fns/locale'

import 'react-datepicker/dist/react-datepicker.css'

// eslint-disable-next-line prettier/prettier

import { CustomHeader } from '@/shared/ui/Calendar/CustomHeader'
import { useRouter } from 'next/router'

import './Calendar.scss'
export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const { t } = useTranslation()

  console.log(startDate)

  const { locale } = useRouter()

  return (
    <DatePicker
      customInput={
        <TextField
          label={t.profileSettings.tab.generalInformation.form.dateOfBirthday}
          name={'calendar'}
        />
      }
      dateFormatCalendar={'YYYY'}
      formatWeekDay={date => date.substring(0, 3)}
      locale={locale === 'ru' ? ru : enUS}
      onChange={(date: any) => setStartDate(date)}
      // renderCustomHeader={() => <CustomHeader />}
      selected={startDate}
      showMonthDropdown
      showYearDropdown
    />
  )
}
