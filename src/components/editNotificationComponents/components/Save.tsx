import { Button } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { postNewNote, startValidation } from "../../../store/actions/notificationsActions";
import { validateNotificationData } from "../../../validation/CreateNotofocationDataValidation";



const Save = () => {


    const createNotificationData = useAppSelector(state => state.createNotificationData);

    const {data} = createNotificationData;

    const dispatch = useAppDispatch()

    const navigate = useNavigate();


    const arrKeys:any = (validateNotificationData(data))


 

    return (

        <div style={{marginTop:'30px',marginBottom:'30px',display:"flex",justifyContent:'flex-end'}}>

            <Button 
                primary   
                onClick={(() => {

                    if(!validateNotificationData(data)) {
                        console.log('OK!');
                        dispatch(postNewNote(data));
                        navigate('/');
                    } else {
                        // here will be validation of CreateNotofocationData fields
                        dispatch(startValidation(arrKeys));
                        console.log(data);
                        console.log(arrKeys);
                        return 
                    }

                })}
            >
            Save
            </Button>

        </div>

    );
}

export default Save;