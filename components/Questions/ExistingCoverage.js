import { questionKeys } from "../../questions"
import Dropdown from "./Types/Dropdown"

export default function ExistingCoverage({data, updateData}) {
    
  return (
    <Dropdown 
        title={"Do you currently have commercial liability coverage?"} 
        options={[
            'Yes', 
            'No'
        ]}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.existingCoverage}
    />
  )
}