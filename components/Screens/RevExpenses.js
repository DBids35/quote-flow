import { questionKeys } from "../../config"
import Expenses from "../Questions/Expenses"
import Revenue from "../Questions/Revenue"
import QuoteScreen from "../QuoteScreen"

export default function RevExpenses({data, updateData, setNextActive}) {
    

  return (
    <QuoteScreen 
      title={'Estimated Revenues and Expenses'} 
      questions={[
        <Revenue data={data} updateData={updateData} key={questionKeys.revenue}/>, 
        <Expenses data={data} updateData={updateData} key={questionKeys.expenses}/>
      ]}
      data={data} 
      setNextActive={setNextActive} 
      screenKeys={[questionKeys.revenue, questionKeys.expenses]}
    />
  )
}
