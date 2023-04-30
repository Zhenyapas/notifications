import NotificationsList from './pages/NotificationsList';
import { Route, Routes,} from 'react-router-dom';
import EditNotification from './pages/EditNotification';
import CreateNotification from './pages/CreateNotification';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { fetchNotificationData } from './store/actions/notificationsActions';




function App() {



  const dispatch=useAppDispatch();

  useEffect(() => { 
    dispatch(fetchNotificationData()) 
  },[])


  return (


      
      <Routes>

        <Route path={`/`} element={<NotificationsList />} />
        <Route path={`/:id`} element={<EditNotification />} />
        <Route path={`/createNotification`} element={<CreateNotification />} />


      </Routes>

    );
}



export default App;
