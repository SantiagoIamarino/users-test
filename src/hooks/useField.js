import { useState } from "react"

// A Simple custom hook to handle input onchange event
export const useField = ({ type, def }) => {

  const [value, setValue] = useState(def)

  const onChange = (e) => setValue(e.target.value)

  return {
    value,
    onChange,
    type
  }

}