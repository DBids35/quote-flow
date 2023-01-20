import { useEffect, useState } from "react"
import { defaultDropdownText } from "../../../config"

export default function Dropdown({title, options, data, updateData, questionKey}) {

  const defaultVal = defaultDropdownText
  const [modOptions, setModOptions] = useState([defaultVal, ...options])

  useEffect( () => {

    updateData(questionKey, Object.keys(data).includes(questionKey) ? data[questionKey] : defaultVal)

  }, [])
  
    return (
      <div className="mt-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <select
          id="location"
          name="location"
          className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm rounded-md bg-brand-gray-light h-[54px] ${(Object.keys(data).includes(questionKey) && data[questionKey] == defaultDropdownText) ? 'text-gray-300': ''}`}
          value={Object.keys(data).includes(questionKey) && data[questionKey]}
          onChange={(e) => updateData(questionKey, e.target.value)}
        >
            {modOptions.map(opt => (
                <option key={opt}>{opt}</option>
            ))}
        </select>
      </div>
    )
  }
  