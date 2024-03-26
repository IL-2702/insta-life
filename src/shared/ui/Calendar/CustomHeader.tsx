import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import { SelectComponent } from '@/shared/ui/Select'
import { generate100years } from '@/shared/utils/generate100years'

import s from './Calendar.module.scss'

export const CustomHeader = ({
  changeMonth,
  changeYear,
  date,
}: Pick<ReactDatePickerCustomHeaderProps, 'changeMonth' | 'changeYear' | 'date'>) => {
  const months = [
    { title: 'January' },
    { title: 'February' },
    { title: 'March' },
    { title: 'April' },
    { title: 'May' },
    { title: 'June' },
    { title: 'July' },
    { title: 'August' },
    { title: 'September' },
    { title: 'October' },
    { title: 'November' },
    { title: 'December' },
  ]

  const monthsKeys: { [key: string]: number } = {
    April: 3,
    August: 7,
    December: 11,
    February: 1,
    January: 0,
    July: 6,
    June: 5,
    March: 2,
    May: 4,
    November: 10,
    October: 9,
    September: 8,
  }

  return (
    <div className={s.customHeader}>
      <div className={s.mountWrapper}>
        <SelectComponent
          className={s.select}
          currentValue={months[date.getMonth()]}
          fullWidth
          onValueChange={value => changeMonth(monthsKeys[value])}
          optionTextVariant={'bold16'}
          selectItems={months}
        ></SelectComponent>
      </div>
      <div className={s.yearsWrapper}>
        <SelectComponent
          className={s.select}
          currentValue={{ title: String(date.getFullYear()) }}
          fullWidth
          onValueChange={value => changeYear(Number(value))}
          optionTextVariant={'bold16'}
          selectItems={generate100years()}
        ></SelectComponent>
      </div>

      <button>
        <div className={s.arrowLeft}>{'<'}</div>
      </button>
      <button>
        <div className={s.arrowRight}>{'>'}</div>
      </button>
    </div>
  )
}
