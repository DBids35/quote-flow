import { questionKeys } from "../../questions"
import Coverages from "../Questions/Coverages"
import QuoteScreen from "../QuoteScreen"

export default function InsuranceOptions({data, updateData, setNextActive}) {

  return (
      <QuoteScreen 
        title={'Commercial Coverage Options'} 
        questions={[
          <Coverages data={data} updateData={updateData} key={questionKeys.coverages}/>
        ]}
        data={data} 
        setNextActive={setNextActive} 
        screenKeys={[questionKeys.coverages]}
      />
  )
}
