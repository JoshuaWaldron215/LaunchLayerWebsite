import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom font links
const fontLinks = document.createElement("link");
fontLinks.rel = "stylesheet";
fontLinks.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap";
document.head.appendChild(fontLinks);

// Add Font Awesome for icons
const fontAwesome = document.createElement("link");
fontAwesome.rel = "stylesheet";
fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(fontAwesome);

// Add page title
const title = document.createElement("title");
title.textContent = "LaunchLayer | Web Development Services";
document.head.appendChild(title);

createRoot(document.getElementById("root")!).render(<App />);
