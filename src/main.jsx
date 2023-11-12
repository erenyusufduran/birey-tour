import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FloatingWhatsApp
      phoneNumber="+905339302927"
      accountName="Birey Tur"
      avatar="/logo50x50.png"
      statusMessage="En fazla 2 saat içerisinde geri dönüş yapacağız."
      chatMessage="Size nasıl yardımcı olabiliriz?"
      placeholder="Bir mesaj yaz."
      allowEsc={true}
      allowClickAway={true}
    />
    <App />
  </React.StrictMode>
);
