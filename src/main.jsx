import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FloatingWhatsApp
      phoneNumber="+905325132858"
      accountName="Birey Tour"
      avatar="logo.jpg"
      statusMessage="En fazla 2 saat içerisinde geri dönüş yapacağız."
      chatMessage="Size nasıl yardımcı olabiliriz?"
      placeholder="Bir mesaj yaz."
      allowEsc={true}
      allowClickAway={true}
    />
    <App />
  </React.StrictMode>
);
