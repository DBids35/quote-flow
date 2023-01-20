import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker({title, data, updateData, questionKey}) {
  const [todayDt, setTodayDt] = useState(new Date(new Date().getFullYear(), new Date().getMonth() , new Date().getDate(), 0, 0))

  useEffect(() => {
    updateData(questionKey, Object.keys(data).includes(questionKey) ? data[questionKey] : todayDt)
  }, [])

  return (
    <>
        <p className="mt-4 block text-sm font-medium text-gray-700">{title}</p>
        <DatePicker className="h-96" selected={data[questionKey] >= todayDt ? data[questionKey]: todayDt} onChange={(date) => updateData(questionKey, date)} />
    </>
    
  );
  }
  