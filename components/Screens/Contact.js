import { questionKeys } from "../../config"
import Email from "../Questions/Email"
import FirstName from "../Questions/FirstName"
import LastName from "../Questions/LastName"
import TextOptIn from "../Questions/TextOptIn"
import PhoneNumber from "../Questions/Types/PhoneNumber"
import QuoteScreen from "../QuoteScreen"

export default function Contact({data, updateData, setNextActive}) {

  return (
      <QuoteScreen 
        title={'Contact'} 
        questions={[
          <FirstName data={data} updateData={updateData} key={questionKeys.firstName}/>, 
          <LastName data={data} updateData={updateData} key={questionKeys.lastName}/>, 
          <Email data={data} updateData={updateData} key={questionKeys.email}/>, 
          <PhoneNumber data={data} updateData={updateData} key={questionKeys.phoneNumber}/>, 
          <TextOptIn data={data} updateData={updateData} key={questionKeys.textOptIn}/>
        ]}
        data={data} 
        setNextActive={setNextActive} 
        screenKeys={[questionKeys.firstName, questionKeys.lastName, questionKeys.email, questionKeys.phoneNumber, questionKeys.textOptIn]}
      />
      
  )
}
