import { questionKeys } from "../../questions";
import MultiSelect from "./Types/MultiSelect";

export default function OtherServices({selectedPayroll, selectedBenefits, data, updateData}) {
    
    let serviceOptions = [
        {
            key:'wants_hr_resource',
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
    if (!selectedPayroll) {
        serviceOptions.unshift({key: 'wants_hr_payroll', text:'Payroll'})
    }
    if (!selectedBenefits) {
        serviceOptions.unshift({key: 'wants_hr_benefits_search', text:'Finding affordable benefits'})
        serviceOptions.unshift({key: 'wants_hr_benefits_admin', text: 'Administering benefits (medical, dental, retirement)'})
    }


    
  return (

    <MultiSelect 
        title={"Are you interested in other services?"} 
        options={serviceOptions}
        data={data}
        updateData={updateData}
        questionKey={questionKeys.otherServices}
    />
    )
}
