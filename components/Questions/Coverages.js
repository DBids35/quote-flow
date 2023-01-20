import { questionKeys } from "../../config";
import MultiSelect from "./Types/MultiSelect";

export default function Coverages({data, updateData}) {

    const coverageOptions = [
        {
            key: 'wants_insurance_liability',
            text: 'General Liability'
        },
        {
            key: 'wants_insurance_property',
            text: 'Commerical Property'
        },
        {
            key: 'wants_insurance_bop',
            text: 'Business Owner’s Policy / BOP (General Liability + Commercial Property)'
        },
        {
            key: 'wants_insurance_workerscomp',
            text: 'Workers’ Compensation'
        },
        {
            key: 'wants_insurance_auto',
            text: 'Commercial Auto'
        },
        {
            key: 'wants_insurance_eo',
            text: 'Professional Liability / E&O'
        },
    ]
    
  return (

    <MultiSelect 
        title={"What coverages do you need?"} 
        options={coverageOptions}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.coverages}
    />
    )
}
