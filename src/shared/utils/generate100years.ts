export const generate100years = () => {
  const currentYear = new Date().getFullYear()

  const years = []

  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push({ title: String(i) })
  }

  return years
}
