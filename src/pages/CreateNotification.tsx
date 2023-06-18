import {Page} from '@shopify/polaris';
import Locations from '../components/editNotificationComponents/components/Locations';
import NotificationDetails from '../components/editNotificationComponents/components/NotificationDetails';
import NotificationRecipients from '../components/editNotificationComponents/components/NotificationRecipients';
import ProductsAndNotifications from '../components/editNotificationComponents/components/ProductsAndThresholds';
import Save from '../components/editNotificationComponents/components/Save';







function CreateNotification() {




  return (

      <Page
        breadcrumbs={[{content: 'Notifications', url: '/'}]}
        title="Create Notification"
      >


      <div style={{marginTop:'20px'}}>
            
          <NotificationDetails  />

          <ProductsAndNotifications />

          <NotificationRecipients />

          <Locations />
          
          <Save />

          
        
      </div>
        

      </Page>
    );
}








export default CreateNotification;