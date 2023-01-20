import MultiSelect from "./Types/MultiSelect";
import { questionKeys } from "../../questions";

export default function BenefitsKind({data, updateData}) {

    const benefitsOptions = [
        {
            key: 'wants_benefits_medical',
            text:'Medical'  
        },
        {
            key: 'wants_benefits_dental',
            text: 'Dental'
        },
        {
            key: 'wants_benefis_vision',
            text: 'Vision'
        },
        {
            key: 'wants_benefits_401k',
            text: '401k'
        },
        {
            key: 'wants_benefits_hsafsa',
            text: 'FSA / HSA'
        },
        {
            key: 'wants_benefits_mentalhealth',
            text: 'Mental Health'
        },
        {
            key: 'wants_benefits_pregnancy',
            text: 'Pregnancy'
        }
    ]
    
  return (

    <MultiSelect 
        title={"What benefits do you want to offer?"} 
        options={benefitsOptions}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.benefitsKind}
    />
    )
}
