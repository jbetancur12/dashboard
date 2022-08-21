import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { defaultTheme } from '@app/store/slices/themeSlice';

interface EventTarget {
  state?: 'activated';
}

const themes = {
  dark: `${process.env.PUBLIC_URL}/themes/main-dark.css`,
  light: `${process.env.PUBLIC_URL}/themes/main-light.css`,
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={defaultTheme}
        insertionPoint={document.getElementById('inject-styles-here')}
      >
        <App />
      </ThemeSwitcherProvider>
    </Provider>
  </React.StrictMode>,
);

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', (event) => {
        if ((event.target as EventTarget).state === 'activated') window.location.reload();
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
}); // app will reload if new version of app is available

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
