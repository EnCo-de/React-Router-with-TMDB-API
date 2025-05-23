import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function CalendarSelect() {
  const [value, setValue] = useState(new Date())

  function onChange(nextValue) {
    setValue(nextValue)
  }

  return <Calendar onChange={onChange} value={value} />
}
