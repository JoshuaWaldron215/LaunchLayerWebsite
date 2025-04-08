import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome for icons if not already in index.html
if (!document.querySelector('link[href*="font-awesome"]')) {
  const fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  document.head.appendChild(fontAwesome);
}

// Mount the application
createRoot(document.getElementById("root")!).render(<App />);
