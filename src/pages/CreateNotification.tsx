import {Page} from '@shopify/polaris';
import AdditionalSettings from '../components/AdditionalSettings';
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
        secondaryActions={[
          {
            content: 'Send now',
            disabled: false,
            helpText: '',
          },
        ]}
      >


      <div style={{marginTop:'20px'}}>
            
          <NotificationDetails id='' />

          <ProductsAndNotifications />

          <NotificationRecipients />

          <Locations />

          <AdditionalSettings />

          <Save />

          
        
      </div>
        

      </Page>
    );
}








export default CreateNotification;