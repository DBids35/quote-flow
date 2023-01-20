import { questionKeys } from "../../config"
import HRFeatures from "../Questions/HRFeatures"
import QuoteScreen from "../QuoteScreen"

export default function HRTools({data, updateData, setNextActive}) {
    
  return (
      <QuoteScreen
        title={'HR Tools'} 
        questions={[
          <HRFeatures data={data} updateData={updateData} key={questionKeys.hrFeatures}/>
        ]}
        data={data} 
        setNextActive={setNextActive} 
        screenKeys={[questionKeys.hrFeatures]}
      />
  )
}
