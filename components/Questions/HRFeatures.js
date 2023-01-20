import { questionKeys } from "../../questions";
import MultiSelect from "./Types/MultiSelect";

export default function HRFeatures({data, updateData}) {

    const hrOptions = [
        {
            key: 'wants_hr_payroll',
            text: 'Payroll'
        },
        {
            key: 'wants_hr_benefits_admin',
            text: 'Administering benefits (medical, dental, retirement)'
        },
        {
            key: 'wants_hr_benefits_search',
            text: 'Finding affordable benefits'
        },
        {
            key: 'wants_hr_resource',
            text: 'Ongoing/dedicated HR support (HRO, ASO, PEO)'
        },
        {
            key:'wants_hr_wellness',
            text: 'Keeping employees happy'
        },
        {
            key:'wants_hr_workforce',
            text: 'Workforce Management'
        },
        {
            key:'wants_hr_onboarding',
            text: 'Automating Onboarding / Applicant Tracking'
        },
        {
            key:'wants_hr_timetracking',
            text: 'Time tracking & attendance'
        },
        {
            key:'wants_hr_itsupport',
            text: 'IT Tools'
        }
    ]
    
  return (

    <MultiSelect 
        title={"What features are you looking for?"} 
        options={hrOptions}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.hrFeatures}
    />
    )
}
