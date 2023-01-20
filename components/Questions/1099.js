import { questionKeys } from "../../config";
import Toggle from "./Types/Toggle";

export default function Ten99({data, updateData}) {

    return (
        <Toggle 
            title="1099 employees"
            data={data}
            updateData={updateData}
            questionKey={questionKeys.Ten99}
        />
    )
}
