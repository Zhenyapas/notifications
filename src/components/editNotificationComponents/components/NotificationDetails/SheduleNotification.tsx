import {AlphaCard,Select,Checkbox,AlphaStack} from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import useDaysCheckBox from '../../../../hooks/UseDaysCheckBoxHook';

import useSelect from '../../../../hooks/UseSelectHook';
import { setDaysToSend, setHour, setTimeZone } from '../../../../store/actions/notificationsActions';
 
import { timeZone } from '../../../../variables/timeZone';





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


    const dispatch = useAppDispatch();

    const weekDays: IDay[] = [
      { day: "Mon", active: false },
      { day: "Tue", active: false },
      { day: "Wed", active: false },
      { day: "Thu", active: false },
      { day: "Fri", active: false },
      { day: "Sat", active: false },
      { day: "Sun", active: false },
    ];


    const [days,setDays] = useState(weekDays);

    const changeDays = (arr:IDay[]) => {

      setDays(arr);
     
    }

    


   
    const {value:value2,onChange:onChange2} = useSelect(timeZone().arrDate[0]);
    const {value:value3,onChange:onChange3} = useSelect(timeZone().timeZones[0]);

 
    const parseHours = (str:string):number => {

      const regex=/^(\d+):/
      const match = str.match(regex);

      return (match ) ? parseInt(match[1]) : 0
    }


    function parseTimeZone(str:string):number {
      
      const regex = /GMT([+-]\d+):/;
      const match = str.match(regex);
    
      if (match && match[1]) {
        const numberBeforeColon = parseInt(match[1]);
        return numberBeforeColon;
      }
      
      return 0;
    }


    useEffect(() => {
      dispatch(setHour(parseHours(value2)));
    },[value2]);



    useEffect(() => {
      dispatch(setTimeZone(parseTimeZone(value3)))
    },[value3]);


  
    return (

        <>
            <AlphaCard>
              <AlphaStack gap="4">



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

  const dispatch = useAppDispatch()


  useEffect(() => {

    const parseDays = days.filter((e:any) => e.active ).map((e:any) => e.day.toUpperCase());
    dispatch(setDaysToSend(parseDays));


  },[days]);


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