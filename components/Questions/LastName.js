import { questionKeys } from "../../questions";
import TextInput from "./Types/TextInput";

export default function LastName({data, updateData}) {
    
  return (
    <TextInput title={"Last Name"} htmlFor={"lname"} placeholder={"Doe"} data={data} updateData={updateData} questionKey={questionKeys.lastName}/>
)
}
