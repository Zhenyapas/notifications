import {AlphaCard,Select,Checkbox,AlphaStack} from '@shopify/polaris';
import { useState } from 'react';
import useDaysCheckBox from '../../../hooks/UseDaysCheckBoxHook';
import useSelect from '../../../hooks/UseSelectHook';
 
import { timeZone } from '../../../variables/timeZone';

const initialDays = [
  { day: "Mon", active: false },
  { day: "Tue", active: false },
  { day: "Wed", active: false },
  { day: "Thu", active: false },
  { day: "Fri", active: false },
  { day: "Sat", active: false },
  { day: "Sun", active: false },
];
  
  function SheduleNotification() {

    const weekDays: IDay[] = [
      { day: "Mon", active: true },
      { day: "Tue", active: true },
      { day: "Wed", active: false },
      { day: "Thu", active: false },
      { day: "Fri", active: true },
      { day: "Sat", active: false },
      { day: "Sun", active: false },
    ];


    const [days,setDays] = useState(weekDays);

    const changeDays = (arr:IDay[]) => {
      setDays(arr);
    }


    const {value:value1,onChange:onChange1} = useSelect('daily');
    const {value:value2,onChange:onChange2} = useSelect(timeZone().arrDate[0]);
    const {value:value3,onChange:onChange3} = useSelect(timeZone().timeZones[0]);


  
    return (

        <>
            <AlphaCard>
              <AlphaStack gap="4">

                <Select
                  label="Schedule type"
                  options={[{label:'Daily',value:'daily'},{label:'Weakly',value:'weakly'}, {label:'Monthly',value:'monthly'}]}
                  value={value1}
                  onChange={(e) => onChange1(e)}
                />

                <DaysCheckBox days={days} changeDays={changeDays} />

                <Select
                  label="Send time"
                  options={timeZone().arrDate}
                  value={value2}
                  onChange={(e) => onChange2(e)}
                />


              <Select
                  label="Time zone"
                  options={timeZone().timeZones}
                  value={value3}
                  onChange={(e) => onChange3(e)}
                />


         
              </AlphaStack>
            </AlphaCard>

            <div style={{marginBottom:'20px'}}></div>
        </>
    );
 }

interface IDay {
  day: string;
  active: boolean;
}

 const DaysCheckBox = ({ days:wDays, changeDays }: { days?: IDay[],changeDays:(day:IDay[]) => void }) => {



  const {days,handleDayChange } = useDaysCheckBox(wDays ? wDays : initialDays)


  return (
    
    <div style={{display:'flex'}}>

      {days.map((day:IDay,i:number) => {

        return (

          <div  style={{marginRight:'10px'}}>
            <Checkbox
              id={`${i}`}
              key={`${day} - ${i}`} label={day.day}
              checked={day.active} 
              onChange={(event) => handleDayChange(i,event)}
            />
          </div>

        )}
       )
      } 

    </div>
    
   )

    

   
 }
  
  
  export default SheduleNotification;