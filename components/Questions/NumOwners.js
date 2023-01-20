import { questionKeys } from "../../config";
import NumericalInput from "./Types/NumericalInput";

export default function NumOwners({data, updateData}) {
    

  return (
    <NumericalInput
      title={'Number of owners/members?'} 
      placeholder={0}
      data={data}
      updateData={updateData}
      questionKey={questionKeys.numOwners}
    />
  )
}
