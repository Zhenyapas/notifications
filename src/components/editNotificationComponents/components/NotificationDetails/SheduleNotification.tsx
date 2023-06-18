import {AlphaCard,Select,Checkbox,AlphaStack} from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import useDaysCheckBox from '../../../../hooks/UseDaysCheckBoxHook';

import useSelect from '../../../../hooks/UseSelectHook';
import { setDaysToSend, setHour, setTimeZone } from '../../../../store/actions/notificationsActions';
 
import { timeZone } from '../../../../variables/timeZone';

function getTimeZoneFromOffset(offset: number): string {
  const timeZones = timeZone().timeZones

  const index = offset + 11;
  if (index >= 0 && index < timeZones.length) {
    return timeZones[index];
  }

  return "";
}


const initialDays = [
  { day: "Mon", active: false },
  { day: "Tue", active: false },
  { day: "Wed", active: false },
  { day: "Thu", active: false },
  { day: "Fri", active: false },
  { day: "Sat", active: false },
  { day: "Sun", active: false },
];
  
  function SheduleNotification({type}:{type?:string}) {


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


  const data = useAppSelector((state) => state.editNotification);
  const {days_to_send,send_hour,time_zone} = data.data;

    const [days,setDays] = useState<IDay[]>(weekDays);
;



   

const formatHours = (hours: number): string => {
  const formattedHours = hours.toString().padStart(2, '0');
  return `${formattedHours}:00`;
};




const {value:value2,onChange:onChange2,setValue:setValue2} = useSelect(timeZone().arrDate[0]);
const {value:value3,onChange:onChange3,setValue:setValue3} = useSelect(timeZone().timeZones[0]);




    useEffect(() => {
      if(type === 'Edit') { 
        
        setDays(days.map(e => {
         return  {day:e.day, active: days_to_send.includes(e.day.toUpperCase())} 
        }
        ));

        setValue2(formatHours(send_hour));
        console.log(value2);
        setValue3(getTimeZoneFromOffset(time_zone));
        console.log((time_zone))
     
      }
    } , [data])

    const changeDays = (arr:IDay[]) => {

      setDays(arr);
     
    }

    


   


 
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



                <DaysCheckBox days={days} changeDays={changeDays} type="Edit" />

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

 const DaysCheckBox = ({ days:wDays, changeDays,type}: { days?: IDay[],type?:'Edit',changeDays:(day:IDay[]) => void }) => {


  const {days,handleDayChange,updateDays} = useDaysCheckBox(initialDays);

  useEffect(() => {

    updateDays(wDays);

  },[wDays])

 
  const dispatch = useAppDispatch()


  useEffect(() => {

    const parseDays = days.filter((e:any) => e.active ).map((e:any) => e.day.toUpperCase());
    
    dispatch(setDaysToSend(parseDays));

    console.log(days);


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