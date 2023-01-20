import { industryList } from "../../industries";
import { questionKeys } from "../../questions";
import SearchableDropdown from "./Types/SearchableDropdown";

export default function WhatYouDo({data, updateData}) {
    
  return (
    <SearchableDropdown 
      title={"What do you do?"} 
      options={industryList}
      data={data}
      updateData={updateData}
      questionKey={questionKeys.whatYouDo}
    />
)
}
