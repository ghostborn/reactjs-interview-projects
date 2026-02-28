import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const GOOGLE_CLIENT_ID =
  "744395610353-ng778f4omti5tlauh7rmnv55gcs1evtq.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. 用 GoogleOAuthProvider 包裹整个应用 */}
    {/* <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>*/}
    <App />
    {/* </GoogleOAuthProvider>*/}
  </StrictMode>,
);
