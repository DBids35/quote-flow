import { questionKeys } from "../../config"
import Datepicker from "./Types/Datepicker"

export default function CoverageStart({data, updateData}) {
    
  return (
    <Datepicker 
      title="When would you like your new coverage to start?"
      data={data}
      updateData={updateData}
      questionKey={questionKeys.coverageStart}
    />
  )
}