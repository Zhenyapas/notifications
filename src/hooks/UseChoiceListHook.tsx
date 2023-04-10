import { useState, useCallback } from "react";




type IUseChoiceList= (
  initialValue: string[]
) => {
  value:string[];
  onChange: (value:string[]) => void
};

const useChoiceList: IUseChoiceList = (initialValue) => {
  
  const [value, setVal] = useState(initialValue);

  const onChange = useCallback(
    (event:string[]) => {

      setVal(event)

    },
    [value]
  );

  return { value, onChange };
};

export default useChoiceList;