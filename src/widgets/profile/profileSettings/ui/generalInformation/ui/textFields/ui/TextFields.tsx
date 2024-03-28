import { memo } from 'react'

import { TextArea } from '@/shared/ui/TextArea'
import { TextField } from '@/shared/ui/Textfield'
import { TextFieldsProps } from '@/widgets/profile/profileSettings/ui/generalInformation/ui/textFields/container'
import { clsx } from 'clsx'

import s from './TextFields.module.scss'

export const TextFields = memo(
  ({ cities, city, dropdownOpen, handleInputChange, handleOptionClick }: TextFieldsProps) => {
    return (
      <div className={s.smallContainer}>
        <div className={s.inputWrap}>
          <label className={s.label}>
            Username<span className={s.star}>*</span>
            <TextField />
          </label>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            First Name<span className={s.star}>*</span>
            <TextField />
          </label>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            Last Name<span className={s.star}>*</span>
            <TextField />
          </label>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            City
            <TextField
              onChange={e => handleInputChange(e.target.value)}
              placeholder={'Enter city name'}
              value={city}
            />
          </label>
          <ul className={clsx(cities.length > 0 ? s.citiesList : s.displayNone, 'target')}>
            {dropdownOpen &&
              cities?.map((city, index) => (
                <li className={s.city} key={index} onClick={() => handleOptionClick(city)}>
                  {city}
                </li>
              ))}
          </ul>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            About Me <TextArea rows={3} />
          </label>
        </div>
      </div>
    )
  }
)
