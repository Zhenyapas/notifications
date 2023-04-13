import NotificationsList from './pages/NotificationsList';
import { Route, Routes,} from 'react-router-dom';
import EditNotification from './pages/EditNotification';
import CreateNotification from './pages/CreateNotification';




function App() {


  return (


      
      <Routes>

        <Route path={`/`} element={<NotificationsList />} />
        <Route path={`/:id`} element={<EditNotification />} />
        <Route path={`/createNotification`} element={<CreateNotification />} />


      </Routes>

    );
}



export default App;
