import { questionKeys } from "../../config";
import Toggle from "./Types/Toggle";

export default function TextOptIn({data, updateData}) {

    return (
        <Toggle 
            title="Consent to Receive Texts"
            data={data}
            updateData={updateData}
            questionKey={questionKeys.textOptIn}
        />
    )
}
