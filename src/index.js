import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "./auth/react-auth0-wrapper";
import config from "./auth/auth_config.json";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

render(
    <BrowserRouter>
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            audience={config.audience}
            redirect_uri={config.redirect_uri}
            onRedirectCallback={onRedirectCallback}>
            <App/>
        </Auth0Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
