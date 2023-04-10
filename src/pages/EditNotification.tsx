import {Page} from '@shopify/polaris';
import NotificationDetails from '../components/editNotificationComponents/components/NotificationDetails';
import ProductsAndNotifications from '../components/editNotificationComponents/components/ProductsAndThresholds';







function EditNotification() {




  return (

      <Page
        breadcrumbs={[{content: 'Notifications', url: 'main'}]}
        title="Edit Notification"
        secondaryActions={[
          {
            content: 'Send now',
            disabled: true,
            helpText: 'You need permission to import products.',
          },
        ]}
      >


      <div style={{marginTop:'20px'}}>
            
          <NotificationDetails />

          <ProductsAndNotifications />
        
      </div>
        

      </Page>
    );
}








export default EditNotification;