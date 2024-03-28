import { memo } from 'react'

import { TextArea } from '@/shared/ui/TextArea'
import { TextField } from '@/shared/ui/Textfield'
import { TextFieldsProps } from '@/widgets/profile/profileSettings/ui/generalInformation/ui/textFields/container'
import { clsx } from 'clsx'

import s from './TextFields.module.scss'

export const TextFields = memo(
  ({ cities, city, dropdownOpen, handleInputChange, handleOptionClick, t }: TextFieldsProps) => {
    return (
      <div className={s.smallContainer}>
        <div className={s.inputWrap}>
          <label className={s.label}>
            {t.profileSettings.tab.generalInformation.form.username}
            <span className={s.star}>*</span>
            <TextField />
          </label>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            {t.profileSettings.tab.generalInformation.form.firstname}
            <span className={s.star}>*</span>
            <TextField />
          </label>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            {t.profileSettings.tab.generalInformation.form.lastname}
            <span className={s.star}>*</span>
            <TextField />
          </label>
        </div>
        <div className={s.inputWrap}>
          <label className={s.label}>
            {t.profileSettings.tab.generalInformation.form.city}
            <TextField
              onChange={e => handleInputChange(e.target.value)}
              placeholder={t.profileSettings.tab.generalInformation.form.enterName}
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
            {t.profileSettings.tab.generalInformation.form.aboutMe} <TextArea rows={3} />
          </label>
        </div>
      </div>
    )
  }
)
