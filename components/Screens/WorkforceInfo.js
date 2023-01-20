import { questionKeys } from "../../config"
import Ten99 from "../Questions/1099"
import Headcount from "../Questions/Headcount"
import W2 from "../Questions/W2"
import QuoteScreen from "../QuoteScreen"

export default function WorkforceInfo({data, updateData, setNextActive}) {
    
  return (
    <QuoteScreen 
      title={'Workforce Info'} 
      questions={[
        <Headcount data={data} updateData={updateData} key={questionKeys.headcount}/>, 
        <W2 data={data} updateData={updateData} key={questionKeys.w2}/>, 
        <Ten99 data={data} updateData={updateData} key={questionKeys.Ten99}/>
      ]}
      data={data} 
      setNextActive={setNextActive} 
      screenKeys={[questionKeys.headcount, questionKeys.w2, questionKeys.Ten99]}
    />
  )
}
