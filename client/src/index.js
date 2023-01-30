import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import './styles.css';

 
debugger;
const rootElement = document.getElementById('root');
debugger;
const root = createRoot(rootElement);
root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );