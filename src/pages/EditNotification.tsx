import {Page} from '@shopify/polaris';
import {  useParams } from 'react-router-dom';





function EditNotification() {

  const params = useParams();

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

       <h1>{params.id}</h1>
        

      </Page>
    );
}



export default EditNotification;