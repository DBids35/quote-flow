import { questionKeys } from "../../config";
import Toggle from "./Types/Toggle";

export default function W2({data, updateData}) {

    return (
        <Toggle 
            title="W2 employees"
            data={data}
            updateData={updateData}
            questionKey={questionKeys.w2}
        />
    )
}
