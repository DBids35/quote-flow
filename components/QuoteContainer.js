import { useEffect, useState } from "react";
import Link from "next/link";

import BusinessInfo from "../components/Screens/BusinessInfo";
import WorkforceInfo from "../components/Screens/WorkforceInfo"
import InsuranceDetails from "../components/Screens/InsuranceDetails";
import InsuranceOptions from "../components/Screens/InsuranceOptions";
import Contact from "../components/Screens/Contact";
import RevExpenses from "../components/Screens/RevExpenses";
import HRTools from "../components/Screens/HRTools";
import Payroll from "../components/Screens/Payroll"
import Benefits from "../components/Screens/Benefits"
import OtherFeatures from "../components/Screens/OtherFeatures";

import ProgressBar from "../components/ProgressBar";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import {screenKeys} from "../config";
import Loading from '../components/Loading'



export default function QuoteContainer({data, updateData}) {
    const changePage = (increment) => {
      setScreensIdx(screensIdx + increment)
      setNextActive(false)
    }

    const vertsToScreens = (data, updateData, setNextActive) => {
      let screensList = [
        <BusinessInfo key={screenKeys.business_info} data={data} updateData={updateData} setNextActive={setNextActive}/>, 
        <WorkforceInfo key={screenKeys.workforce_info} data={data} updateData={updateData} setNextActive={setNextActive}/>, 
        //<RevExpenses key={screenKeys.estimated_revenues} data={data} updateData={updateData} setNextActive={setNextActive}/>
      ]
      let screensKeyList = [screenKeys.business_info, screenKeys.workforce_info, screenKeys.estimated_revenues]
      if (data?.quote_request_hr) {
        screensList.push(<HRTools key={screenKeys.hr_tools} data={data} updateData={updateData} setNextActive={setNextActive}/>)
        screensKeyList.push(screenKeys.hr_tools)
      }
      if (data?.quote_request_payroll) {
        screensList.push(<Payroll key={screenKeys.payroll} data={data} updateData={updateData} setNextActive={setNextActive}/>)
        screensKeyList.push(screenKeys.payroll)
      }
      if (data?.quote_request_benefits) {
        screensList.push(<Benefits key={screenKeys.benefits} data={data} updateData={updateData} setNextActive={setNextActive}/>)
        screensKeyList.push(screenKeys.benefits)
      }
    
      if ((data?.quote_request_benefitsbenefits|| data?.quote_request_payroll) && !data?.quote_request_hr) {
        screensList.push(<OtherFeatures key={screenKeys.other_features} selectedPayroll={verts.includes('payroll')} selectedBenefits={verts.includes('benefits')} data={data} updateData={updateData} setNextActive={setNextActive}/>)
        screensKeyList.push(screenKeys.other_features)
      }
    
      if (data?.quote_request_insurance) {
        screensList.push(<InsuranceOptions key={screenKeys.commercial_coverage_options} data={data} updateData={updateData} setNextActive={setNextActive}/>)
        screensKeyList.push(screenKeys.commercial_coverage_options)
        screensList.push(<InsuranceDetails key={screenKeys.commercial_coverage_details} data={data} updateData={updateData} setNextActive={setNextActive}/>)
        screensKeyList.push(screenKeys.commercial_coverage_details)
      }
      screensList.push(<Contact key={screenKeys.contact} data={data} updateData={updateData} setNextActive={setNextActive}/>)
      screensKeyList.push(screenKeys.contact)
      return {screensList, screensKeyList}
    }


    const [screensIdx, setScreensIdx] = useState(0)
    const [nextActive, setNextActive] = useState(false)
    const [hitStartQuote, setHitStartQuote] = useState(false)
    const [loading, setLoading] = useState(false)


    const {screensList, screensKeyList} = vertsToScreens(data, updateData, setNextActive)

    useEffect(() => {

      updateData('quote_screens', screensKeyList)

      
    }, [])

    useEffect(() => {

      if (!hitStartQuote) {

        const quoteStartEventData = {
          ...data,
          quote_screens: screensKeyList
        }
        
        setHitStartQuote(true)

      }
      
    }, [])
    


    const clearLocal = () => {
      updateData('empty')
      setScreensIdx(0)
    }

  const handleBack = (screenBackedFrom) => {
    changePage(-1)
  }

  const handleNext = (screenCompleted) => {
    const eventName = `${screenCompleted}_screen_submit`
    changePage(1)
  }

  const handleSubmit = () => {
    clearLocal()
    setLoading(true)
  }



  return (
    <div className={"flex flex-col"}>
      {loading ? <Loading/> :<div className="flex justify-center">
        <div className="flex flex-col w-3/4 md:w-1/2 xl:w-1/3">
          <ProgressBar current={screensIdx} total={screensList.length}/>
          {screensList[screensIdx]}
          <div className="flex justify-between my-12 items-center">
            <div className="">
              {screensIdx > 0 && <button className="border py-2 px-3 rounded-md bg-brand-blue" onClick={() => handleBack(screensKeyList[screensIdx])}>{<ArrowLeftIcon className="h-4 w-6 text-white"/>}</button>}
            </div>
            
            <div className="justify-end">
              {screensIdx < screensList.length - 1 ? 
                <button 
                  style={{pointerEvents: nextActive ? '': 'none'}} 
                  className={`border border-brand-gray-light py-2 px-3 rounded-md  ${nextActive ? 'bg-brand-blue': 'bg-brand-gray-medium'}`} 
                  onClick={() => handleNext(screensKeyList[screensIdx])}
                > 
                  {<ArrowRightIcon className={`h-4 w-6 ${nextActive? 'text-white':'text-brand-gray-light'}`}/>}
                </button>
                : 
                <Link 
					href={`/results`}
				>
                  <p style={{pointerEvents: nextActive ? '': 'none'}} onClick={() => handleSubmit()} className={`border py-2 px-3 rounded-md text-brand-gray-light  ${nextActive ? 'bg-brand-blue text-white': 'bg-brand-gray-medium'}`}>Submit</p>
                </Link>  
              }
            </div>
            
          </div>
        </div>
      </div>}
    </div>
  )
}
