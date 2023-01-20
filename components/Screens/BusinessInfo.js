import BusinessStructure from "../Questions/BusinessStructure"
import NumOwners from "../Questions/NumOwners"
import QuoteScreen from "../QuoteScreen"
import { questionKeys } from "../../config"

export default function BusinessInfo({data, updateData, setNextActive}) {

  return (
      <QuoteScreen 
        title={'Business Info'} 
        questions={[
          <BusinessStructure data={data} updateData={updateData} key={questionKeys.businessStructure}/>, 
          <NumOwners data={data} updateData={updateData} key={questionKeys.numOwners}/>
        ]} 
        data={data} 
        setNextActive={setNextActive} 
        screenKeys={[questionKeys.businessStructure, questionKeys.numOwners]}
      />
  )
}
