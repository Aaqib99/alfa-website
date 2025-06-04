import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUsOurOffic = () => {
  const offices = [
    {
      location: 'New York',
      address: '123 5th Ave, New York, NY 10001',
      email: 'nyoffice@example.com',
      phone: '+1 212-555-1234'
    },
    {
      location: 'London',
      address: '456 Oxford St, London, UK W1D 1AN',
      email: 'ldnoffice@example.com',
      phone: '+44 20 7946 0958'
    },
    {
      location: 'Tokyo',
      address: '789 Shibuya, Tokyo, Japan 150-0002',
      email: 'tokoffice@example.com',
      phone: '+81 3-1234-5678'
    }
  ];

  return (
    <>
    <div className="container mx-auto py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Offices Around The World</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <div key={index} className="p-6 bg-transparent p-12 border-b-2 border-l-2 border-r-2 border-sky-500 rounded-b-lg" style={{ borderTop: '4px solid #0ea5e9' }}>
            <h2 className="text-xl font-semibold mb-6">{office.location}</h2>
            <p className="mb-4">{office.address}</p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-2" /> {office.email}
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> {office.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ContactUsOurOffic;
