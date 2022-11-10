export default function ConvertToDate (date) {
  const newDate = new Date(date)
  return newDate.toDateString()
}
