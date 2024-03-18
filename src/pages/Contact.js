import React from 'react';

const Contact = () => {
  const contacts = [
    { name: 'Aulia Ramadhani', whatsapp: '085649100095', instagram: '@lily.elui', lineId: 'Lily_elui' },
    { name: 'Faridz Ramadhan Kampi', whatsapp: '085697101367', instagram: '@faridzkampi', lineId: '' },
    { name: 'Farhan Aditya Kusuma', whatsapp: '082193337584', instagram: '@frhnaditt', lineId: 'jamesjohnson_line' },
    { name: 'Abdillah Fathoni Nabil ', whatsapp: '081280832123', instagram: '@abdillahfn_', lineId: 'emmawilson_line' },
  ];

  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h3>{contact.name}</h3>
            <p>WhatsApp: {contact.whatsapp}</p>
            <p>Instagram: {contact.instagram}</p>
            <p>ID Line: {contact.lineId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
