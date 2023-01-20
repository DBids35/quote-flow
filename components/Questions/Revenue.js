import { questionKeys } from "../../config";
import DollarInput from "./Types/DollarInput";

export default function Revenue({data, updateData}) {
    
  return (

    <DollarInput
      title={"What are your estimated revenues over the next 12 months?"}
      data={data}
      updateData={updateData}
      questionKey={questionKeys.revenue}
    />    
)
}
