import { useEffect } from "react"
import { defaultDropdownText } from "../config"

export default function QuoteScreen({title, questions, data, setNextActive, screenKeys}) {

  const allKeysPresent = () => {
    // get keys currently in the data object
    let dataKeys = Object.keys(data)

    // confirm each key that should be in the data object is
    let includesKeys = screenKeys.map(key => 
      dataKeys.includes(key)   
    )

    // if any keys that were expected aren't in the data object, next shouldn't be active
    if (includesKeys.includes(false)) {
      return false
    }

    // if all keys that were expected are in the data object, next should be active
    return true
  }

  const noKeysEmpty = () => {
    let notEmpty = screenKeys.map(key => data[key] !== '')

    if (notEmpty.includes(false)) {
      return false
    }
    return true
  }

  const noKeysSelect = () => {
    let notSelect = screenKeys.map(key => data[key] !== defaultDropdownText)

    if (notSelect.includes(false)) {
      return false
    }
    return true
  }

  // const phoneCheck = () => {
  //   // if phone key in data == empty but toggle key in data is true
  //   // return false
  //   // else
  //   // return true
  // }

  useEffect(() => {
    setNextActive(allKeysPresent() && noKeysEmpty() && noKeysSelect())
  }, [data])

    return (
      <div>
          <h2 className="text-2xl xl:text-3xl font-extrabold text-brand-gray-dark">{title}</h2>
          {questions}
      </div>
    )
  }
  