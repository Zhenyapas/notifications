import { useState, useCallback } from "react";




type IUseSelect= (
  initialValue: string
) => {
  value:string;
  onChange: (value:string) => void
};

const useSelect: IUseSelect = (initialValue) => {
  
  const [value, setVal] = useState(initialValue);

  const onChange = useCallback(
    (event:string) => {

      setVal(event)

    },
    [value]
  );

  return { value, onChange };
};

export default useSelect;
