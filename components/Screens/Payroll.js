import { questionKeys } from "../../config"
import BusinessKind from "../Questions/BusinessKind"
import CurrentPayroll from "../Questions/CurrentPayroll"
import PayrollThisYear from "../Questions/PayrollThisYear"
import QuoteScreen from "../QuoteScreen"

export default function Payroll({data, updateData, setNextActive}) {
    
  return (
    <QuoteScreen 
      title={'Payroll'} 
      questions={[
        <PayrollThisYear data={data} updateData={updateData} key={questionKeys.payrollThisYear}/>, 
        <CurrentPayroll data={data} updateData={updateData} key={questionKeys.currentPayroll}/>, 
        <BusinessKind data={data} updateData={updateData} key={questionKeys.businessKind}/>
      ]}
      data={data} 
      setNextActive={setNextActive} 
      screenKeys={[questionKeys.payrollThisYear, questionKeys.currentPayroll, questionKeys.businessKind]}
    />
  )
}
