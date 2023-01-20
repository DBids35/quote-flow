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
export default function NumericalInput({title, placeholder, data, updateData, questionKey}) {
    return (
      <div className="mt-4">
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <div className="mt-1">
          <input
            type="number"
            name="number"
            id="number"
            className="shadow-sm focus:ring-brand-blue focus:border-brand-blue block w-full sm:text-sm border-gray-300 placeholder:text-gray-300 rounded-md bg-brand-gray-light p-4"
            placeholder={placeholder}
            onChange={(e) => updateData(questionKey, e.target.value)}
            value={Object.keys(data).includes(questionKey) && data[questionKey]}
            />
        </div>
      </div>
    )
  }
  