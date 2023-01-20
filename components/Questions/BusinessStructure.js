import Dropdown from "./Types/Dropdown"
import { questionKeys } from "../../config"

export default function BusinessStructure({data, updateData}) {
    
  return (
    <Dropdown 
        title={"What is your business structure?"} 
        options={[
            'Individual / Sole Proprietorship', 
            'Partnership', 
            'Limited Liability Company',
            'Corporation',
            'Trust',
            'Other Entity'
        ]}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.businessStructure}
    />
  )
}
