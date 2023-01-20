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
export default function DollarInput({title, data, updateData, questionKey}) {
    return (
      <div className="mt-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          {title}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name="price"
            id="price"
            className="focus:ring-brand-blue focus:border-brand-blue block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md placeholder:text-gray-300 bg-brand-gray-light p-4"
            placeholder="1000"
            value={Object.keys(data).includes(questionKey) ? data[questionKey]: ''}
            aria-describedby="price-currency"
            onChange={(e) => updateData(questionKey, e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              USD
            </span>
          </div>
        </div>
      </div>
    )
  }
  