
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Element root introuvable');
}

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error('Erreur lors du rendu:', error);
  rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif; text-align: center;"><h1>Chargement en cours...</h1><p>Veuillez patienter pendant le chargement de la page.</p></div>';
}
