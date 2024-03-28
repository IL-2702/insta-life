import { SetStateAction, useEffect, useState } from 'react'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { useDebouncedCallback } from 'use-debounce'

export const useContainer = () => {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const { t } = useTranslation()

  const debouncedSearch = useDebouncedCallback((query: string) => {
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${process.env.NEXT_PUBLIC_GEO_API_KEY}`
    )
      .then(res => res.json())
      .then(({ features }) => {
        if (features) {
          const cities = features.map((city: any) => city.properties.city)
          const uniqueCities: string[] = Array.from(new Set(cities))

          setCities(uniqueCities as SetStateAction<never[]>)
        }
      })
      .catch(err => console.log(err))
  }, 250)

  const handleInputChange = (text: string) => {
    debouncedSearch(text)
    setCity(text)
  }

  const handleOptionClick = (option: string) => {
    setSelectedValue(option)
    setCity(option)
    setDropdownOpen(false)
    setCities([])
  }

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement

    if (dropdownOpen && !target.closest('.target')) {
      setDropdownOpen(false)
      setCities([])
    }
  }

  useEffect(() => {
    if (cities) {
      setDropdownOpen(true)
    }
  }, [setDropdownOpen, cities])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  return { cities, city, dropdownOpen, handleInputChange, handleOptionClick, t }
}
