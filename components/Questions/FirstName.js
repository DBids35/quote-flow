import { questionKeys } from "../../config";
import TextInput from "./Types/TextInput";

export default function FirstName({data, updateData}) {
    
  return (
    <TextInput
      title={"First Name"}
      htmlFor={"fname"} 
      placeholder={"John"}
      data={data} 
      updateData={updateData}
      questionKey={questionKeys.firstName}
    />
)
}
