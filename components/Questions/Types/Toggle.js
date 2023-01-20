/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle({title, data, updateData, questionKey}) {

  useEffect(() => {
    // if the toggle doesn't have a tracked state, set it to false, which is the default
    updateData(questionKey, Object.keys(data).includes(questionKey) ? data[questionKey] : false)
    
  }, [])

  return (
    <Switch.Group as="div" className="flex justify-between mt-4">
        <Switch.Label as="span" className="mr-3">
            <span className="text-sm font-medium text-gray-900">{title}</span>
        </Switch.Label>
      <Switch
        checked={Object.keys(data).includes(questionKey) && data[questionKey]}
        onChange={() => updateData(questionKey, !data[questionKey])}
        className={classNames(
          data[questionKey] ? 'bg-brand-blue' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            data[questionKey] ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      
    </Switch.Group>
  )
}
