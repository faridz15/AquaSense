import React from 'react';
import AquaSenseImage from './images/AquaSense.jpg';
import LCDImage from './images/LCD.jpg';
import BuzzerImage from './images/Buzzer.jpg';
import ServoImage from './images/Servo.jpg';
import ESP8266Image from './images/ESP8266.jpg';

const Deskripsi = () => (
  <div>
    <h1>Deskripsi Page</h1>
    <p>
      Aqua Sense, alat ini adalah sistem pengendalian dan monitoring tingkat air otomatis yang menggunakan sensor water level, sensor DHT, buzzer, dan servo motor yang terhubung ke mikrokontroler ESP8266. Sensor water level digunakan untuk mendeteksi ketinggian air dalam tangki atau wadah penyimpanan air, sedangkan sensor DHT11 digunakan untuk mengukur suhu air. Ketika tingkat air melebihi batas yang ditentukan, buzzer akan memberikan peringatan suara, dan servo motor akan diaktifkan untuk membuka pintu pembatas air yang akan mengalirkan air keluar, mencegah air lebih lanjut masuk ke dalam area yang terancam banjir. Begitu tingkat air kembali normal, servo motor akan menutup pintu pembatas air kembali. Alat ini dirancang untuk memberikan solusi yang efektif dalam mengatasi risiko banjir dan mengoptimalkan penggunaan sumber daya air.
    </p>
    <h2>Gambar Alat</h2>
    <div>
      <img src={AquaSenseImage} alt="AquaSense" style={{ width: '200px', margin: '10px' }} />
      <img src={LCDImage} alt="LCD" style={{ width: '200px', margin: '10px' }} />
      <img src={BuzzerImage} alt="Buzzer" style={{ width: '200px', margin: '10px' }} />
      <img src={ServoImage} alt="Servo Motor" style={{ width: '200px', margin: '10px' }} />
      <img src={ESP8266Image} alt="ESP8266" style={{ width: '200px', margin: '10px' }} />
    </div>
  </div>
);

export default Deskripsi;
