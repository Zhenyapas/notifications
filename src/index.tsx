
import './index.css';
import reportWebVitals from './reportWebVitals';


import { createRoot } from "react-dom/client";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { BrowserRouter } from 'react-router-dom';
import { setUpStore } from './store';
import { Provider } from 'react-redux';
import App from './App';


const container:any = document.getElementById("root");
const root = createRoot(container);


const store = setUpStore();


root.render(
  <BrowserRouter  basename={process.env.PABLIC_URL}>

    <AppProvider i18n={en}>
      
      <Provider store={store}>
        <App />
      </Provider>
       

    </AppProvider>
    
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
