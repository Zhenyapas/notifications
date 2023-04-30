import { Button } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";



const Save = () => {


    const data = useAppSelector(state => state.createNotificationData.data);

    const [newData,updateData] = useState(data)

    useEffect(() =>  updateData(data), [data])


    return (

        <div style={{marginTop:'30px',marginBottom:'30px',display:"flex",justifyContent:'flex-end'}}>

            <Button primary onClick={() => console.log(newData)}>Save</Button>

        </div>

    );
}

export default Save;