import { Button } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { postNewNote } from "../../../store/actions/notificationsActions";



const Save = () => {


    const createNotificationData = useAppSelector(state => state.createNotificationData);

    const {data,error} = createNotificationData;

    const dispatch = useAppDispatch()

    const [newData,updateData] = useState(data)

    const navigate = useNavigate();



    useEffect(() =>  updateData(data), [createNotificationData])


    return (

        <div style={{marginTop:'30px',marginBottom:'30px',display:"flex",justifyContent:'flex-end'}}>

            <Button 
                primary   
                onClick={(() => {

                    console.log(newData)

                    if(error) {

                        // Here could be validation
                        return
                    }

                    dispatch(postNewNote(newData))
                    
                    navigate('/')


                })}
            >
            Save
            </Button>

        </div>

    );
}

export default Save;