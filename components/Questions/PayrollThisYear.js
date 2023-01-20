import { questionKeys } from "../../config"
import Dropdown from "./Types/Dropdown"
export default function PayrollThisYear({data, updateData}) {
    

  return (
    <Dropdown 
        title={"Have you run payroll yet this year?"} 
        options={[
            'Yes', 
            'No'
        ]}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.payrollThisYear}
    />
  )
}