import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Menggunakan 'firebase/compat/app' untuk kompatibilitas
import 'firebase/compat/database'; // Menggunakan 'firebase/compat/database' untuk kompatibilitas
import { Card } from 'react-bootstrap';
import { firebaseConfig } from './firebase'; // Pastikan firebaseConfig sudah didefinisikan sebelumnya

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DataMonitoringAlat = () => {
  const [waterLevel, setWaterLevel] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const database = firebase.database();
    const waterLevelRef = database.ref('/t+9/waterlevel');
    const temperatureRef = database.ref('/t+9/temperature');
    const humidityRef = database.ref('/t+9/humidity');

    waterLevelRef.on('value', (snapshot) => {
      setWaterLevel(snapshot.val());
    }, (error) => {
      console.error('Error fetching water level data:', error);
    });

    temperatureRef.on('value', (snapshot) => {
      setTemperature(snapshot.val());
    }, (error) => {
      console.error('Error fetching temperature data:', error);
    });

    humidityRef.on('value', (snapshot) => {
      setHumidity(snapshot.val());
    }, (error) => {
      console.error('Error fetching humidity data:', error);
    });

    // Membersihkan event listener saat komponen unmount
    return () => {
      waterLevelRef.off();
      temperatureRef.off();
      humidityRef.off();
    };
  }, []);

  // Menulis data ke Firebase setiap 2 detik
  useEffect(() => {
    const writeData = () => {
      let counter = 1;
      setInterval(() => {
        firebase.database().ref(`t+${counter}/waterlevel`).set(waterLevel);
        firebase.database().ref(`t+${counter}/humidity`).set(humidity);
        firebase.database().ref(`t+${counter}/temperature`).set(temperature);
        counter++;
      }, 2000);
    };

    writeData(); // Panggil fungsi untuk menulis data
  }, [waterLevel, humidity, temperature]); // Jadikan efek terjadi ketika nilai waterLevel, humidity, atau temperature berubah

  return (
    <div id='datamonitor' className='container' style={{ padding: '20px', marginTop:'150px', marginBottom:'400px' }}>
      <Card>
        <Card.Body >
          <Card.Title style={{ fontSize: '24px', marginBottom: '20px' }}>Data Monitoring Alat</Card.Title>
          <div>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>Water Level: {waterLevel}</p>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>Temperature: {temperature} °C</p>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>Humidity: {humidity}%</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DataMonitoringAlat;
