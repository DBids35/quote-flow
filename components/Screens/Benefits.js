import BenefitsKind from "../Questions/BenefitsKind"
import QuoteScreen from "../QuoteScreen"
import { questionKeys } from "../../config"

export default function Benefits({data, updateData, setNextActive}) {

  return (
    <QuoteScreen 
      title={'Benefits'} 
      questions={[
        <BenefitsKind data={data} updateData={updateData} key={questionKeys.benefitsKind}/>
      ]}
      data={data} 
      setNextActive={setNextActive} 
      screenKeys={[questionKeys.benefitsKind]}
    />
  )
}
