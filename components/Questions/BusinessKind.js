import { questionKeys } from "../../questions"
import Dropdown from "./Types/Dropdown"

export default function BusinessKind({data, updateData}) {
    
  return (
    <Dropdown 
        title={"What kind of business?"} 
        options={[
            'Office',
            'Retail/Food',
            'Construction/Field/Factory',
            'Other'
        ]}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.businessKind}
    />
  )
}