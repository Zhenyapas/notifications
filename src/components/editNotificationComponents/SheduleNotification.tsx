import {AlphaCard,Select,Checkbox,AlphaStack} from '@shopify/polaris';
import { useCallback, useEffect, useState } from 'react';
 
import { timeZone } from '../../variables/timeZone';
  
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


    const [days,setDays] = useState(weekDays)

    const changeDays = (arr:IDay[]) => {
      setDays(arr);
    }
  
    return (

        <>
            <AlphaCard>
              <AlphaStack gap="4">

                <Select
                  label="Schedule type"
                  options={['Daily','Weekly', 'Monthly']}
                />

                <DaysCheckBox days={days} changeDays={changeDays} />

                <Select
                  label="Send time"
                  options={timeZone().arrDate}
                />


              <Select
                  label="Time zone"
                  options={timeZone().timeZones}
                />


         
              </AlphaStack>
            </AlphaCard>
        </>
    );
 }

interface IDay {
  day: string;
  active: boolean;
}

 const DaysCheckBox = ({ days, changeDays }: { days?: IDay[],changeDays:(day:IDay[]) => void }) => {

  const [dayses, setDays] = useState<IDay[]>([
    { day: "Mon", active: false },
    { day: "Tue", active: false },
    { day: "Wed", active: false },
    { day: "Thu", active: false },
    { day: "Fri", active: false },
    { day: "Sat", active: false },
    { day: "Sun", active: false },
  ]);

  useEffect(() => {
    if(days) setDays(days);
  },[days])



  const handleChange = useCallback(
   
      (event: any, i: number, dayses: IDay[]) => {
        const updatedDays = dayses.map((day, index) =>
          index === i ? { ...day, active: event } : day
        );
        setDays(updatedDays);
        changeDays(updatedDays)
    
    },
    [days],
  );

  return (
    
    <div style={{display:'flex'}}>

      {dayses.map(({day}:{day:string},i:number) => {

        return (

          <div  style={{marginRight:'10px'}}>
            <Checkbox
              id={`${i}`}
              key={`${day} - ${i}`} label={day}
              checked={dayses ? dayses[i].active : false} 
              onChange={(event) => handleChange(event,i,dayses)}
            />
          </div>

        )}
       )
      } 

    </div>
    
   )

    

   
 }
  
  
  export default SheduleNotification;