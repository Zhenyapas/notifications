import {Page} from '@shopify/polaris';
import NotificationsList from './pages/NotificationsList';
import { Route, Routes,useLocation} from 'react-router-dom';

import ResourceListWithSelection from './components/ResourceListWithSelection';
import EditNotification from './pages/EditNotification';




function App() {

  const path = useLocation();



  return (


      
      <Routes>

        <Route path={`/main`} element={<NotificationsList />} />
        <Route path={`/:id`} element={<EditNotification />} />


      </Routes>

    );
}



export default App;
