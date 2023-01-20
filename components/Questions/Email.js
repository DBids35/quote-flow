import { questionKeys } from "../../config";
import TextInput from "./Types/TextInput";

export default function Email({data, updateData}) {
    
  return (
    <TextInput title={"Email"} htmlFor={"email"} placeholder={"johndoe@gmail.com"} htmlType={"email"} data={data} updateData={updateData} questionKey={questionKeys.email}/>
)
}
