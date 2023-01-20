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
export default function TextInput({title, htmlFor, placeholder, htmlType, data, updateData, questionKey}) {
    return (
      <div className="mt-4 ">
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <div className="mt-1">
          <input
            type={htmlType || "text"}
            name={htmlFor}
            id={htmlFor}
            className="shadow-sm focus:ring-brand-blue focus:border-brand-blue block w-full sm:text-sm border-gray-300 rounded-md placeholder:text-gray-300  bg-brand-gray-light p-4"
            placeholder={placeholder}
            value={Object.keys(data).includes(questionKey) ? data[questionKey]: ''}
            onChange={(e) => updateData(questionKey, e.target.value)}
          />
        </div>
      </div>
    )
  }
  