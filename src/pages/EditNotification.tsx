import {Page} from '@shopify/polaris';
import { useParams } from 'react-router-dom';
import AdditionalSettings from '../components/AdditionalSettings';
import Locations from '../components/editNotificationComponents/components/Locations';
import NotificationDetails from '../components/editNotificationComponents/components/NotificationDetails';
import NotificationRecipients from '../components/editNotificationComponents/components/NotificationRecipients';
import ProductsAndNotifications from '../components/editNotificationComponents/components/ProductsAndThresholds';
import Save from '../components/editNotificationComponents/components/Save';







function EditNotification() {


    const params = useParams();

    const id =(params.id) ? params.id.slice(2) : '';

  return (

      <Page
        breadcrumbs={[{content: 'Notifications', url: '/'}]}
        title="Edit Notification"
        secondaryActions={[
          {
            content: 'Send now',
            disabled: false,
            helpText: '',
          },
        ]}
      >


      <div style={{marginTop:'20px'}}>
            
          <NotificationDetails id={id} type='Edit'  />

          <ProductsAndNotifications />

          <NotificationRecipients />

          <Locations />

          <AdditionalSettings />

          <Save />

          
        
      </div>
        

      </Page>
    );
}








export default EditNotification;