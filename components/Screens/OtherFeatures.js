import { questionKeys } from "../../questions"
import OtherServices from "../Questions/OtherServices"
import QuoteScreen from "../QuoteScreen"

export default function OtherFeatures({selectedPayroll, selectedBenefits, data, updateData, setNextActive}) {

  return (
    <QuoteScreen 
      title={'Other Features'} 
      questions={[
        <OtherServices data={data} updateData={updateData} key={questionKeys.otherServices} selectedPayroll={selectedPayroll} selectedBenefits={selectedBenefits}/>
      ]}
      data={data} 
      setNextActive={setNextActive} 
      screenKeys={[questionKeys.otherServices]}
    />
  )
}
