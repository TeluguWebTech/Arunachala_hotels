import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HotelSection = () => {
  const [filters, setFilters] = useState({
    searchQuery: '', // Add searchQuery to the initial state
    budget: '',
    priceLessThan: '',
    type: '',
    complimentary: '',
    distance: '',
  });

  const navigate = useNavigate();

  const hotels = [
    {
      id: 1,
      name: 'TPS Lodge',
      tariff: '800 onwards',
      price: 800,
      contact: '04175-252577',
      landmark: 'North Ammani Amman Gopuram Street',
      location: '1km',
      type: 'Non-AC',
      complimentary: ['Free Wi-Fi'],
      image: '/hotelImages/1.jpg',
    },
    {
      id: 2,
      name: 'GJK Rooms',
      tariff: '500 onwards',
      price: 500,
      contact: '94430 06416, 79043 00749',
      landmark: '',
      location: '1.5km',
      type: 'Non-AC',
      complimentary: ['Free Wi-Fi', '24/7 Hot Water'],
      image: '/hotelImages/2.jpg',
    },
    {
      id: 3,
      name: 'CS Lodge',
      tariff: '1000 onwards',
      price: 1000,
      contact: '04175-225751, 94875 92851',
      landmark: '',
      location: '2km',
      type: 'AC & Non-AC',
      complimentary: ['Breakfast', 'Free Wi-Fi'],
      image: '/hotelImages/3.jpg',
    },
    {
      id: 4,
      name: 'Sri Ram Lodge (Opp Sakthi Cinema)',
      tariff: '600 onwards',
      price: 600,
      contact: '94438 10601',
      landmark: 'West Pey Gopuram Road',
      location: '1.2km',
      type: 'Non-AC',
      complimentary: ['24/7 Hot Water'],
      image: '/hotelImages/4.jpg',
    },
    {
      id: 5,
      name: 'Azhagananda Swamigal Madalayam (Basic)',
      tariff: '150 onwards (basic)',
      price: 150,
      contact: '97894 05146',
      landmark: 'West Pey Gopuram Road',
      location: '800m',
      type: 'Non-AC',
      complimentary: ['Basic Amenities'],
      image: '/hotelImages/5.jpg',
    },
    {
      id: 6,
      name: 'OYA Madam',
      tariff: '800 onwards',
      price: 800,
      contact: '99625 22806, 04175 - 224962',
      landmark: 'South Tirumanjana Gopuram',
      location: '1.8km',
      type: 'AC & Non-AC',
      complimentary: ['Free Wi-Fi', 'Laundry Service'],
      image: '/hotelImages/6.jpg',
    },
    {
      id: 7,
      name: 'Sivakasi Nadar Madam',
      tariff: '800 onwards',
      price: 800,
      contact: '81240 71871',
      landmark: 'South Tirumanjana Gopuram',
      location: '2km',
      type: 'Non-AC',
      complimentary: ['24/7 Hot Water'],
      image: '/hotelImages/7.jpg',
    },
    {
      id: 8,
      name: 'Ganesh International Lodge',
      tariff: '1300 onwards',
      price: 1300,
      contact: '04175 - 226701, 83001 16701',
      landmark: 'East Rajagopuram Side',
      location: '2.5km',
      type: 'AC & Non-AC',
      complimentary: ['Breakfast', 'Pickup & Drop'],
      image: '/hotelImages/8.jpg',
    },
    {
      id: 9,
      name: 'Hotel Arunachala Near Rajagopuram',
      tariff: '2600 onwards',
      price: 2600,
      contact: '93452 15204, 04175-228300',
      landmark: 'East Rajagopuram Side',
      location: '3km',
      type: 'AC',
      complimentary: ['Breakfast', 'Free Parking'],
      image: '/hotelImages/9.jpg',
    },
    {
      id: 10,
      name: 'Hotel Nala Residency',
      tariff: '2800 onwards',
      price: 2800,
      contact: '9585550205 / 6382788980',
      landmark: 'No. 21, Annasalai',
      location: '3.5km',
      type: 'AC',
      complimentary: ['Breakfast', 'Free Wi-Fi', 'Gym Access'],
      image: '/hotelImages/10.jpg',
    },
    {
      id: 11,
      name: 'Hotel Arpana',
      tariff: '4400 onwards',
      price: 4400,
      contact: '98433 80379',
      landmark: 'Polur Rd, near Anna Arch',
      location: '4km',
      type: 'AC',
      complimentary: ['Breakfast', 'Swimming Pool Access'],
      image: '/hotelImages/1.jpg',
    },
    {
      id: 12,
      name: 'Sparsa Resort',
      tariff: '6000 onwards',
      price: 6000,
      contact: '7299986585',
      landmark: 'Athiyanthal Village, Chengam Road',
      location: '5km',
      type: 'AC',
      complimentary: ['Breakfast', 'Swimming Pool', 'Spa Services'],
      image: '/hotelImages/4.jpg',
    },
    {
      id: 13,
      name: 'Hotel Himalaya',
      tariff: '3600 onwards',
      price: 3600,
      contact: '04175 255255',
      landmark: 'Polur Rd, Vengikkal',
      location: '4.5km',
      type: 'AC & Non-AC',
      complimentary: ['Breakfast', 'Pickup & Drop'],
      image: '/hotelImages/6.jpg',
    },
    {
      id: 14,
      name: 'Hotel Amoha',
      tariff: '3800 onwards',
      price: 3800,
      contact: '94422 09220',
      landmark: '7th Cross Street Gandhinagar',
      location: '3.8km',
      type: 'AC',
      complimentary: ['Breakfast', 'Gym Access', 'Free Parking'],
      image: '/hotelImages/8.jpg',
    },
  ];
  

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearchQuery =
      filters.searchQuery === '' ||
      hotel.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const matchesBudget =
      filters.budget === '' ||
      (filters.budget === 'low' && hotel.price <= 1000) ||
      (filters.budget === 'medium' && hotel.price > 1000 && hotel.price <= 3000) ||
      (filters.budget === 'high' && hotel.price > 3000);

    const matchesPriceLessThan =
      filters.priceLessThan === '' || hotel.price <= parseInt(filters.priceLessThan);

    const matchesType =
      filters.type === '' || hotel.type.toLowerCase().includes(filters.type.toLowerCase());

    const matchesComplimentary =
      filters.complimentary === '' ||
      hotel.complimentary.some((item) =>
        item.toLowerCase().includes(filters.complimentary.toLowerCase())
      );

    const matchesDistance =
      filters.distance === '' ||
      parseFloat(hotel.location.replace('km', '').replace('m', '')) <=
        parseFloat(filters.distance);

    return (
      matchesSearchQuery &&
      matchesBudget &&
      matchesPriceLessThan &&
      matchesType &&
      matchesComplimentary &&
      matchesDistance
    );
  });

  const handleMoreClick = (hotel) => {
    navigate(`/hotel-details/${hotel.id}`, { state: { hotels } });
  };

  return (
    <div className="container mx-auto p-4 ">
      {/* Filter Section */}
      <div className="flex flex-wrap justify-start gap-4 mb-6 bg-orange-500 p-6 rounded-lg shadow-md">
        {/* Search Filter */}
      
        {/* Budget Filter */}
        <select
          value={filters.budget}
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Budget</option>
          <option value="low">Low (≤ ₹1000)</option>
          <option value="medium">Medium (₹1000 - ₹3000)</option>
          <option value="high">High (≥ ₹3000)</option>
        </select>

        {/* Price Less Than Filter */}
        <input
          type="number"
          placeholder="Price Less Than"
          value={filters.priceLessThan}
          onChange={(e) => setFilters({ ...filters, priceLessThan: e.target.value })}
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Type Filter */}
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Type</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
          <option value="AC & Non-AC">AC & Non-AC</option>
        </select>

        {/* Complimentary Filter */}
        <select
          value={filters.complimentary}
          onChange={(e) => setFilters({ ...filters, complimentary: e.target.value })}
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Complimentary</option>
          <option value="Free Wi-Fi">Free Wi-Fi</option>
          <option value="Breakfast">Breakfast</option>
          <option value="24/7 Hot Water">24/7 Hot Water</option>
          <option value="Pickup & Drop">Pickup & Drop</option>
          <option value="Swimming Pool">Swimming Pool</option>
        </select>

        {/* Distance Filter */}
        <input
          type="number"
          placeholder="Distance (km)"
          value={filters.distance}
          onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      <input
          type="text"
          placeholder="Search by hotel name"
          value={filters.searchQuery}
          onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
          className="flex-1 min-w-[200px] p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>


      {/* Hotel Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">Tariff: {hotel.tariff}</p>
              <p className="text-gray-600">Contact: {hotel.contact}</p>
              {hotel.landmark && <p className="text-gray-600">Nearest Landmark: {hotel.landmark}</p>}
              <p className="text-gray-600">Distance: {hotel.location}</p>
              <p className="text-gray-600">Type: {hotel.type}</p>
              <p className="text-gray-600">
                Complimentary: {hotel.complimentary.join(', ')}
              </p>
              <button
                onClick={() => handleMoreClick(hotel)}
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSection;