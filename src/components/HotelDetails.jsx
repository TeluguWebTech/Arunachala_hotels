import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Access the hotels array from location.state
  const hotels = location.state?.hotels || [];

  // Find the hotel by id
  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-14">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
        ← Back to List
      </button>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section (40% width) */}
        <div className="w-full md:w-2/5">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Details Section (60% width) */}
        <div className="w-full md:w-3/5 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{hotel.name}</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Tariff:</span> {hotel.tariff}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Contact:</span> {hotel.contact}
            </p>
            {hotel.landmark && (
              <p className="text-gray-700">
                <span className="font-semibold">Nearest Landmark:</span> {hotel.landmark}
              </p>
            )}
            <p className="text-gray-700">
              <span className="font-semibold">Distance:</span> {hotel.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Type:</span> {hotel.type}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Complimentary:</span>{' '}
              {hotel.complimentary.join(', ')}
            </p>
          </div>

          {/* Booking Form */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Stay</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Check-In Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Check-Out Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;