import { useState, useCallback } from "react";

type Day = {
  day: string;
  active: boolean;
};

type UseDaysCheckBoxHook = (
  initialDays: Day[]
) => {
  days:any;
  handleDayChange: any;
  updateDays:any;
};

const useDaysCheckBox: UseDaysCheckBoxHook = (initialDays) => {
  const [days, setDays] = useState<Day[]>(initialDays);

  const handleDayChange = useCallback(
    (dayIndex: number, isActive: boolean) => {
      const updatedDays = days.map((day, index) =>
        index === dayIndex ? { ...day, active: isActive } : day
      );
      setDays(updatedDays);
    },
    [days]
  );

   const updateDays = (days:any) => {
      setDays(days);
   }

  return { days, handleDayChange ,updateDays};
};

export default useDaysCheckBox;
