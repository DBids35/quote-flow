import QuoteContainer from "../components/QuoteContainer";
import { useState } from "react";


export default function Home() {

	const [businessData, setBusinessData] = useState({})

	const updateData = (questionKey, value) => {
	  if (questionKey == 'empty'){
		setBusinessData({})
	  }
	  setBusinessData(prev => ({...prev, [questionKey]: value}))
	}

  return (
    <div className={"flex flex-col"}>
      <QuoteContainer data={businessData} updateData={updateData}/>
    </div>
  )
}
