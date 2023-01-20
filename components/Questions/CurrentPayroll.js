import { questionKeys } from "../../questions"
import Dropdown from "./Types/Dropdown"
export default function CurrentPayroll({data, updateData}) {
    

  return (
    <Dropdown 
        title={"How do you currently run payroll?"} 
        options={[
            'New to payroll',
            'Another online software',
            'Manually'
        ]}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.currentPayroll}
    />
  )
}