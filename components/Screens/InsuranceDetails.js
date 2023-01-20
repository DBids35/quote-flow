import { questionKeys } from "../../questions"
import CoverageStart from "../Questions/CoverageStart"
import ExistingCoverage from "../Questions/ExistingCoverage"
import QuoteScreen from "../QuoteScreen"

export default function InsuranceDetails({data, updateData, setNextActive}) {

  return (
      <QuoteScreen 
        title={'Commercial Coverage Details'} 
        questions={[
          <ExistingCoverage data={data} updateData={updateData} key={questionKeys.existingCoverage}/>, 
          <CoverageStart data={data} updateData={updateData} key={questionKeys.coverageStart}/>
        ]}
        data={data} 
        setNextActive={setNextActive} 
        screenKeys={[questionKeys.existingCoverage, questionKeys.coverageStart]}
      />
  )
}
