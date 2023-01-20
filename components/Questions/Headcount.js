import { questionKeys } from "../../questions"
import NumericalInput from "./Types/NumericalInput"

export default function Headcount({data, updateData}) {
    

  return (
    <NumericalInput
      title={'Headcount'} 
      placeholder={0}
      data={data}
      updateData={updateData}
      questionKey={questionKeys.headcount}
    />
  )
}
