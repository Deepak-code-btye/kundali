import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import reducer, { initialState } from "./context/reducer/reducer";
import { StateProvider } from "./context/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </StateProvider>
  </>
);
