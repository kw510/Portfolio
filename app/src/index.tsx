/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import './assets/styles/index.css';
import App from './App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
    document.getElementById('root') as HTMLElement,
);
