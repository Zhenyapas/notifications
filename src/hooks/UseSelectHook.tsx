import { useState, useCallback } from "react";




type IUseSelect= (
  initialValue: string
) => {
  value:string;
  onChange: (value:string) => void
  setValue: (value:string) => void
};

const useSelect: IUseSelect = (initialValue) => {
  
  const [value, setVal] = useState(initialValue);


  const setValue = (val:string) => {

    setVal(val);
  }

  const onChange = useCallback(
    (event:string) => {

      setVal(event)

    },
    [value]
  );

  return { value, onChange, setValue };
};

export default useSelect;
