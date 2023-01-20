import { useState, useEffect } from "react"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function MultiSelect({title, options, data, updateData, questionKey}) {


    useEffect(() => {
      
        updateData(questionKey, Object.keys(data).includes(questionKey) ? data[questionKey] : []);

   }, []);

    const updateSelected = (value) => {
      if (data[questionKey].includes(value)) {
        updateData(questionKey, data[questionKey].filter(v => v != value))
      }
      else {
        updateData(questionKey, [...data[questionKey], value])
      }
    }
    return (
      <fieldset className="space-y-5 mt-4">
        <legend className="">{title}</legend>

        {options.map(({key, text}) => (
            <div className="relative flex items-start " key={key}>
                <div className="flex items-center h-5" >
                    <input
                    id={key}
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    checked={Object.keys(data).includes(questionKey) && data[questionKey].includes(key)}
                    className="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded hover:cursor-pointer"
                    onChange={(e) => updateSelected(key)}
                    />
                </div>
                <div className="ml-3 text-sm" onClick={(e) => updateSelected(key)}>
                    <label htmlFor={text} className="font-medium text-gray-700 hover:cursor-pointer">
                    {text}
                    </label>
                </div>
                </div>
        ))}

        
        
      </fieldset>
    )
  }
  