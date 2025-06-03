
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Error boundary for production
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error('Failed to render app:', error);
  // Fallback content
  rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Chargement...</h1><p>Veuillez patienter pendant le chargement de la page.</p></div>';
}
