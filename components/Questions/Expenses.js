import { questionKeys } from "../../questions";
import DollarInput from "./Types/DollarInput";

export default function Expenses({data, updateData}) {
    
  return (

    <DollarInput 
      title={"What are your estimated payroll expenses for your full-time, part-time, and temporary employees? (Do not include subcontractors)"}
      data={data}
      updateData={updateData}
      questionKey={questionKeys.expenses}
    />    
)
}
