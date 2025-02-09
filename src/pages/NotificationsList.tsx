import {Page} from '@shopify/polaris';

import ResourceListWithSelection from '../components/ResourceListWithSelection';




function NotificationsList() {


  



  return (

      <Page
        title="Notifications"
        primaryAction={{content: 'Create notification', disabled: false, url: '#/createNotification'}}
      >

        <ResourceListWithSelection />
        

      </Page>
    );
}



export default NotificationsList;
