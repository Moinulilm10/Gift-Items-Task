import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {

    const { id } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your own code to send the form data to your backend for processing
      console.log('Form submitted:', name, email, address, phoneNumber);

      // Show success message
    window.alert('Order placed successfully!');
    setName('');
    setEmail('');
    setAddress('');
    setPhoneNumber('');
  };

  return (
    <div className="mx-auto max-w-md my-16 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-4">Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-xl" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-xl" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-xl" htmlFor="address">
            Address
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-xl" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="tel"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 text-2xl"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
